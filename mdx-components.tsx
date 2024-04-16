import type { MDXComponents } from "mdx/types";
import React from "react";
import { ExternalLink } from "@/app/page";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mt-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold mt-4">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-semibold mt-4">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-semibold mt-4">{children}</h6>,
    p: ({ children }) => <p className="text-base mt-2">{children}</p>,
    a: ({ children, href }) => <ExternalLink className="text-base" href={href}>{children}</ExternalLink>,
    hr: () => <div className="divider"></div>,
    q: ({ children }) => <blockquote className="text-base italic">{children}</blockquote>,
    blockquote: ({ children }) => <blockquote className="text-base italic">{children}</blockquote>,
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
    li: ({ children }) => <li className="text-base">{children}</li>,
    code: ({ children }) => <code className="text-sm bg-gray-100 p-1 rounded">{children}</code>,
    inlineCode: ({ children }) => <code className="text-sm bg-gray-100 p-1 rounded">{children}</code>,
    img: ({ src, alt }) => <img className="rounded-lg p-4 w-8/12" src={src} alt={alt} />,

    ...components
  };
}