import React from "react";

/**
 * Universal styled text renderer.
 * Supports [gradient]...[/gradient] for gradient text and [br] for line breaks.
 * Easily extensible for other tags (e.g., [bold], [italic]) in the future.
 * Usage: renderStyledText('Weight Loss[br]tailored to you')
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
    // Handle [br] tags first (self-closing)
    const brIndex = str.indexOf('[br]');
    if (brIndex !== -1) {
      const before = str.slice(0, brIndex);
      const after = str.slice(brIndex + 4); // '[br]' is 4 characters
      return (
        <>
          {parse(before)}
          <br />
          {parse(after)}
        </>
      );
    }

    // Handle other tags with opening/closing pairs
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