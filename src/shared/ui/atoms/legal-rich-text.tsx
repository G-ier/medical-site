import { PortableText, PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-2xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-semibold my-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-semibold my-2">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-4 pl-4 italic my-4">{children}</blockquote>,
    normal: ({ children }) => <p className="my-2">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => <a href={value?.href} className="underline text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">{children}</a>,
  },
};

export function LegalRichText({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
} 