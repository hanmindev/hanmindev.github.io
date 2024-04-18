import type { MDXComponents } from "mdx/types";
import React from "react";
import { ExternalLink } from "@/app/components/external_link";
import { CopyLinkIcon } from "@/app/components/icons/buttons";
import { CopyButton } from "@/app/components/copy_button";

export function headerNameToSectionName(header_val: 1 | 2 | 3 | 4 | 5 | 6, header_name: any): string {
  if (typeof header_name != "string" || header_val == 1) {
    return "";
  }

  return "#".repeat(header_val - 2) + header_name.toLowerCase().replaceAll(/[^0-9a-z-_ ]/gi, "").replaceAll(" ", "-").replaceAll(/-+/gi, "-");
}

function LinkableHeader({ header_val, children }: { header_val: 1 | 2 | 3 | 4 | 5 | 6, children: React.ReactNode }) {
  let section_name = headerNameToSectionName(header_val, children);

  let header;
  switch (header_val) {
    case 1:
      return <h1 id={section_name}
                 className="scroll-mt-24 text-4xl font-bold mt-4">{children}</h1>;
    case 2:
      header = <h2
        className="text-3xl font-semibold">{children}</h2>;
      break;
    case 3:
      header = <h3
        className="text-2xl font-semibold">{children}</h3>;
      break;
    case 4:
      header = <h4
        className="text-xl font-semibold">{children}</h4>;
      break;
    case 5:
      header = <h5
        className="text-lg font-semibold">{children}</h5>;
      break;
    case 6:
      header = <h6
        className="text-base font-semibold">{children}</h6>;
      break;
  }

  if (section_name == "") {
    return header;
  } else {
    return <span id={section_name} className="scroll-m-24 flex mt-8 items-center space-x-2 group">
      {header}
      <CopyButton className="opacity-0 group-hover:opacity-100 transition-opacity hover:cursor-pointer pt-1"
                  copy_value={"#" + section_name}
                  prepend_link enter_link>
        <CopyLinkIcon />
      </CopyButton>
    </span>;
  }
}


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <LinkableHeader header_val={1}>{children}</LinkableHeader>,
    h2: ({ children }) => <LinkableHeader header_val={2}>{children}</LinkableHeader>,
    h3: ({ children }) => <LinkableHeader header_val={3}>{children}</LinkableHeader>,
    h4: ({ children }) => <LinkableHeader header_val={4}>{children}</LinkableHeader>,
    h5: ({ children }) => <LinkableHeader header_val={5}>{children}</LinkableHeader>,
    h6: ({ children }) => <LinkableHeader header_val={6}>{children}</LinkableHeader>,
    p: ({ children }) => <p className="text-sm my-1">{children}</p>,
    a: ({ children, href }) => <ExternalLink className="text-sm my-1" href={href}>{children}</ExternalLink>,
    hr: () => <div className="divider"></div>,
    q: ({ children }) => <blockquote className="text-base italic">{children}</blockquote>,
    blockquote: ({ children }) => <blockquote className="text-base italic">{children}</blockquote>,
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
    li: ({ children }) => <li className="text-sm my-1">{children}</li>,
    code: ({ children }) => <code className="text-sm bg-gray-100 p-1 rounded">{children}</code>,
    inlineCode: ({ children }) => <code className="text-sm bg-gray-100 p-1 rounded">{children}</code>,
    img: ({ src, alt }) => <img className="rounded-lg p-4 w-8/12" src={src} alt={alt} />,

    ...components
  };
}