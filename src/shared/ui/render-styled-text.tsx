import React from "react";

/**
 * Universal styled text renderer.
 * Supports [gradient]...[/gradient] for gradient text.
 * Easily extensible for other tags (e.g., [bold], [italic]) in the future.
 * Usage: renderStyledText('Your first step to [gradient]feeling your best[/gradient]')
 */
export function renderStyledText(text: string): React.ReactNode {
  if (!text) return text;

  // Add more tag configs here as needed
  const TAGS = [
    {
      tag: "gradient",
      className: "gradient-purple-custom",
    },
    // Future: { tag: "bold", className: "font-bold" }, etc.
  ];

  // Recursive function to handle nested/overlapping tags if needed
  function parse(str: string): React.ReactNode {
    for (const { tag, className } of TAGS) {
      const open = `[${tag}]`;
      const close = `[/${tag}]`;
      const start = str.indexOf(open);
      const end = str.indexOf(close);
      if (start !== -1 && end !== -1 && end > start) {
        const before = str.slice(0, start);
        const styled = str.slice(start + open.length, end);
        const after = str.slice(end + close.length);
        return (
          <>
            {before}
            <span className={className}>{parse(styled)}</span>
            {parse(after)}
          </>
        );
      }
    }
    return str;
  }

  return parse(text);
} 