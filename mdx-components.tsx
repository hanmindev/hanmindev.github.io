import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-lg font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-base font-bold">{children}</h3>,
    p: ({ children }) => <p className="text-content">{children}</p>,
    a: ({ children, href }) => <a className="text-blue-500" href={href}>{children}</a>,
    ...components,
  }
}