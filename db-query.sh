#!/bin/bash

# Database Query Script
# Usage: ./db-query.sh [table_name] [limit] [where_condition]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Load environment variables
if [ -f .env ]; then
    while IFS= read -r line; do
        if [[ "$line" =~ ^[A-Z_]+=.*$ ]] && [[ ! "$line" =~ ^#.*$ ]]; then
            export "$line"
        fi
    done < .env
else
    print_error ".env file not found"
    exit 1
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    print_error "DATABASE_URL not found in .env"
    exit 1
fi

# Parse DATABASE_URL
# Format: postgresql://user:password@host:port/database
DB_USER=$(echo $DATABASE_URL | sed 's/.*:\/\/\([^:]*\):.*/\1/')
DB_PASSWORD=$(echo $DATABASE_URL | sed 's/.*:\/\/[^:]*:\([^@]*\)@.*/\1/')
DB_HOST=$(echo $DATABASE_URL | sed 's/.*@\([^:]*\):.*/\1/')
DB_PORT=$(echo $DATABASE_URL | sed 's/.*:\([0-9]*\)\/.*/\1/')
DB_NAME=$(echo $DATABASE_URL | sed 's/.*\/\([^?]*\).*/\1/')

# Function to execute SQL query
execute_query() {
    local query="$1"
    PGPASSWORD="$DB_PASSWORD" psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -c "$query"
}

# Function to execute SQL query with beautiful formatting
execute_formatted_query() {
    local query="$1"
    local format="${2:-table}"
    
    case "$format" in
        "table")
            PGPASSWORD="$DB_PASSWORD" psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" \
                -c "\pset border 2" \
                -c "\pset linestyle unicode" \
                -c "\pset null '(null)'" \
                -c "\pset format aligned" \
                -c "\timing off" \
                -c "$query"
            ;;
        "expanded")
            PGPASSWORD="$DB_PASSWORD" psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" \
                -c "\pset border 2" \
                -c "\pset linestyle unicode" \
                -c "\pset null '(null)'" \
                -c "\x on" \
                -c "\timing off" \
                -c "$query"
            ;;
        "csv")
            PGPASSWORD="$DB_PASSWORD" psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" \
                -c "\pset format csv" \
                -c "\pset tuples_only on" \
                -c "\timing off" \
                -c "$query"
            ;;
        "json")
            PGPASSWORD="$DB_PASSWORD" psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" \
                -c "\pset format json" \
                -c "\pset tuples_only on" \
                -c "\timing off" \
                -c "$query"
            ;;
    esac
}

# Function to show available tables
show_tables() {
    print_info "Available tables:"
    execute_formatted_query "SELECT table_name as \"Table Name\" FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;"
}

# Function to describe table structure
describe_table() {
    local table="$1"
    print_info "Table structure for '$table':"
    execute_formatted_query "SELECT 
        column_name as \"Column Name\", 
        data_type as \"Data Type\", 
        is_nullable as \"Nullable\", 
        column_default as \"Default Value\" 
    FROM information_schema.columns 
    WHERE table_name = '$table' 
    ORDER BY ordinal_position;"
}

# Function to count records
count_records() {
    local table="$1"
    print_info "Record count for '$table':"
    execute_formatted_query "SELECT COUNT(*) as \"Total Records\" FROM $table;"
}

# Function to query table data
query_table() {
    local table="$1"
    local limit="${2:-10}"
    local where_condition="$3"
    local format="${4:-table}"
    
    local query="SELECT * FROM $table"
    
    if [ -n "$where_condition" ]; then
        query="$query WHERE $where_condition"
    fi
    
    query="$query LIMIT $limit;"
    
    case "$format" in
        "table")
            print_info "Querying '$table' (limit: $limit, format: table):"
            ;;
        "expanded")
            print_info "Querying '$table' (limit: $limit, format: expanded):"
            ;;
        "csv")
            print_info "Querying '$table' (limit: $limit, format: csv):"
            ;;
        "json")
            print_info "Querying '$table' (limit: $limit, format: json):"
            ;;
    esac
    
    execute_formatted_query "$query" "$format"
}

# Function to get table column count for auto-format detection
get_column_count() {
    local table="$1"
    PGPASSWORD="$DB_PASSWORD" psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" \
        -t -c "SELECT COUNT(*) FROM information_schema.columns WHERE table_name = '$table';"
}

# Function to auto-detect best format based on table width
auto_format_table() {
    local table="$1"
    local limit="${2:-10}"
    local where_condition="$3"
    
    local col_count=$(get_column_count "$table" | tr -d ' ')
    
    if [ "$col_count" -gt 8 ]; then
        print_warning "Table has many columns ($col_count), using expanded format for better readability"
        query_table "$table" "$limit" "$where_condition" "expanded"
    else
        query_table "$table" "$limit" "$where_condition" "table"
    fi
}

# Main script logic
if [ $# -eq 0 ]; then
    echo "Database Query Script"
    echo "Usage: $0 [table_name] [limit] [where_condition] [format]"
    echo ""
    echo "Options:"
    echo "  table_name      - Name of the table to query"
    echo "  limit           - Number of records to return (default: 10)"
    echo "  where_condition - SQL WHERE condition (optional)"
    echo "  format          - Output format: table, expanded, csv, json (default: auto)"
    echo ""
    echo "Special commands:"
    echo "  $0 --tables           - Show all available tables"
    echo "  $0 --describe [table] - Show table structure"
    echo "  $0 --count [table]    - Count records in table"
    echo "  $0 --format [table] [limit] [where] [format] - Query with specific format"
    echo ""
    echo "Format Options:"
    echo "  table    - Standard table format with borders (default for narrow tables)"
    echo "  expanded - Expanded format, one column per line (auto for wide tables)"
    echo "  csv      - Comma-separated values format"
    echo "  json     - JSON format"
    echo ""
    echo "Examples:"
    echo "  $0 users                              # Auto-format detection"
    echo "  $0 users 20                          # Limit to 20 records"
    echo "  $0 users 5 \"email LIKE '%@example.com'\" # With WHERE condition"
    echo "  $0 --format users 10 \"\" expanded       # Force expanded format"
    echo "  $0 --format users 5 \"\" csv            # Export as CSV"
    echo "  $0 --tables"
    echo "  $0 --describe users"
    echo "  $0 --count payments"
    echo ""
    show_tables
    exit 0
fi

# Handle special commands
case "$1" in
    --tables)
        show_tables
        exit 0
        ;;
    --describe)
        if [ -z "$2" ]; then
            print_error "Table name required for --describe"
            exit 1
        fi
        describe_table "$2"
        exit 0
        ;;
    --count)
        if [ -z "$2" ]; then
            print_error "Table name required for --count"
            exit 1
        fi
        count_records "$2"
        exit 0
        ;;
    --format)
        if [ -z "$2" ]; then
            print_error "Table name required for --format"
            exit 1
        fi
        TABLE_NAME="$2"
        LIMIT="${3:-10}"
        WHERE_CONDITION="$4"
        FORMAT="${5:-table}"
        
        # Validate table exists
        if ! execute_query "SELECT 1 FROM information_schema.tables WHERE table_name = '$TABLE_NAME';" | grep -q "1"; then
            print_error "Table '$TABLE_NAME' does not exist"
            print_info "Available tables:"
            show_tables
            exit 1
        fi
        
        # Show table info
        print_info "Table: $TABLE_NAME"
        count_records "$TABLE_NAME"
        echo ""
        
        # Query the table with specified format
        query_table "$TABLE_NAME" "$LIMIT" "$WHERE_CONDITION" "$FORMAT"
        exit 0
        ;;
esac

# Regular table query
TABLE_NAME="$1"
LIMIT="${2:-10}"
WHERE_CONDITION="$3"
FORMAT="$4"

# Validate table exists
if ! execute_query "SELECT 1 FROM information_schema.tables WHERE table_name = '$TABLE_NAME';" | grep -q "1"; then
    print_error "Table '$TABLE_NAME' does not exist"
    print_info "Available tables:"
    show_tables
    exit 1
fi

# Show table info
print_info "Table: $TABLE_NAME"
count_records "$TABLE_NAME"
echo ""

# Query the table
if [ -n "$FORMAT" ]; then
    # Use specified format
    query_table "$TABLE_NAME" "$LIMIT" "$WHERE_CONDITION" "$FORMAT"
else
    # Auto-detect best format
    auto_format_table "$TABLE_NAME" "$LIMIT" "$WHERE_CONDITION"
fi 