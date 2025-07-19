import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  return NextResponse.json({
    protocol: url.protocol,
    host: url.host,
    pathname: url.pathname,
    headers: Object.fromEntries(request.headers.entries()),
    message: 'Response from test-target',
  });
} 