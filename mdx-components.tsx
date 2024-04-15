import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mt-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold mt-4">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-semibold mt-4">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-semibold mt-4">{children}</h6>,
    p: ({ children }) => <p className="text-base mt-2">{children}</p>,
    a: ({ children, href }) => <a className="text-base text-blue-500 underline" href={href}>{children}</a>,
    hr: () => <div className="divider"></div>,
    ...components
  };
}