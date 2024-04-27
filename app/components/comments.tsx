"use client";

import Giscus from "@giscus/react";

export function Comments() {
  return (
    <div>
      <Giscus
        id="comments"
        repo="hanmindev/hanmin-blog-comments"
        repoId="R_kgDOLz5kbQ"
        category="Announcements"
        categoryId="DIC_kwDOLz5kbc4Ce-yw"
        mapping="pathname"
        term="blog"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}