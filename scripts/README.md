# Scripts

Collection of utility scripts for the project.

## fix-onboarding-order.js

Script for automatically fixing the order of steps in the onboarding configuration.

### Purpose
- Fixes the `order` numbering in onboarding steps
- Eliminates gaps and duplications in the sequence
- Ensures correct numbering from 1 to N

### Usage

```bash
# Run from project root folder
node scripts/fix-onboarding-order.js
```

### What the script does
1. Analyzes all steps in `src/entities/onboarding/model/config.ts`
2. Finds violations in the `order` sequence
3. Automatically fixes the numbering
4. Checks the result and outputs a report

### When to use
- After adding new onboarding steps
- When removing existing steps
- When changing the order of steps
- To fix numbering errors

### Safety
- Script creates a backup before making changes
- Validates the correctness of the result
- Outputs a detailed report of changes 