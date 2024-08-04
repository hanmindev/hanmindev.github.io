import type { MDXComponents } from "mdx/types";
import React from "react";
import { ExternalLink } from "@/app/components/external_link";
import { CopyLinkIcon } from "@/app/components/icons/buttons";
import { CopyButton } from "@/app/components/copy_button";
import clsx from "clsx";
import { Comments } from "@/app/components/comments";

export function headerNameToSectionName(header_val: 1 | 2 | 3 | 4 | 5 | 6, header_name: any): string {
  if (typeof header_name != "string" || header_val == 1) {
    return "";
  }

  return "#".repeat(header_val - 2) + header_name.toLowerCase().replaceAll(/[^0-9a-z-_ ]/gi, "").replaceAll(" ", "-").replaceAll(/-+/gi, "-");
}

export function LinkableHeader({ header_val, children }: {
  header_val: 1 | 2 | 3 | 4 | 5 | 6,
  children: React.ReactNode
}) {
  let section_name = headerNameToSectionName(header_val, children);
  let link_to_section = section_name == "" ? "" : "#" + section_name;

  let header;
  let pt;
  switch (header_val) {
    case 1:
      header = <h1 id={section_name}
                   className="text-4xl font-bold">{children}</h1>;
      pt = "pt-0";
      break;
    case 2:
      header = <h2
        className="mb-1 text-4xl font-black">{children}</h2>;
      pt = "pt-4";
      break;
    case 3:
      header = <h3
        className="text-2xl font-bold">{children}</h3>;
      pt = "pt-8";
      break;
    case 4:
      header = <h4
        className="text-xl font-bold">{children}</h4>;
      pt = "pt-8";
      break;
    case 5:
      header = <h5
        className="italic text-xl font-semibold">{children}</h5>;
      pt = "pt-8";
      break;
    case 6:
      header = <h6
        className="text-lg font-semibold">{children}</h6>;
      pt = "pt-8";
      break;
  }

  return <div id={section_name} className={clsx("scroll-m-24 flex items-center space-x-2 group", pt)}>
    {header}
    <CopyButton className="opacity-0 group-hover:opacity-100 transition-opacity hover:cursor-pointer pt-1"
                copy_value={link_to_section}
                prepend_link enter_link>
      <CopyLinkIcon />
    </CopyButton>
  </div>;
}


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <LinkableHeader header_val={1}>{children}</LinkableHeader>,
    h2: ({ children }) => <LinkableHeader header_val={2}>{children}</LinkableHeader>,
    h3: ({ children }) => <LinkableHeader header_val={3}>{children}</LinkableHeader>,
    h4: ({ children }) => <LinkableHeader header_val={4}>{children}</LinkableHeader>,
    h5: ({ children }) => <LinkableHeader header_val={5}>{children}</LinkableHeader>,
    h6: ({ children }) => <LinkableHeader header_val={6}>{children}</LinkableHeader>,
    p: ({ children }) => <p className="text-base leading-relaxed my-2">{children}</p>,
    a: ({ children, href }) => <ExternalLink className="text-base my-2" href={href}>{children}</ExternalLink>,
    hr: () => <div className="divider"></div>,
    q: ({ children }) => <blockquote className="text-base italic">{children}</blockquote>,
    blockquote: ({ children }) => <blockquote className="text-base italic">{children}</blockquote>,
    ul: ({ children }) => <ul className="text-base list-disc list-inside pl-4">{children}</ul>,
    ol: ({ children }) => <ol className="text-base list-decimal list-inside pl-4">{children}</ol>,
    li: ({ children }) => <li className="my-2 text-base md:list-outside">{children}</li>,
    code: ({ children }) => <code className="text-sm bg-gray-100 p-1 rounded">{children}</code>,
    inlineCode: ({ children }) => <code className="text-sm bg-gray-100 p-1 rounded">{children}</code>,
    img: ({ src, alt }) => <img className="rounded-lg p-4 w-8/12" src={src} alt={alt} />,

    ...components
  };
}