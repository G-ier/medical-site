import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const results: Record<string, any> = {};
  const scenarios = [
    {
      name: 'Base with request.url',
      url: () => {
        try {
          return new URL('/api/test-target', request.url).toString();
        } catch (e) {
          console.error('Error creating URL:', e);
          return null;
        }
      },
    },
    {
      name: 'Relative path',
      url: () => '/api/test-target',
    },
    {
      name: 'Absolute HTTP',
      url: () => 'http://localhost:3000/api/test-target',
    },
    {
      name: 'Absolute HTTPS',
      url: () => 'https://localhost:3000/api/test-target',
    },
  ];

  for (const scenario of scenarios) {
    const url = scenario.url();
    try {
      const res = await fetch(url);
      const data = await res.json();
      results[scenario.name] = { success: true, url, data };
    } catch (error: any) {
      results[scenario.name] = { success: false, url, error: error.message };
    }
  }

  return NextResponse.json(results);
} 