import { Comments } from "@/app/components/comments";
import React from "react";
import { LinkableHeader } from "@/mdx-components";

export function BlogComment() {
  return <div>
    <div className="divider"></div>

    <LinkableHeader header_val={2}>Discussion</LinkableHeader>
    <Comments />
  </div>;
}