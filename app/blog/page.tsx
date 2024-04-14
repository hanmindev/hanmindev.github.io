import Link from "next/link";

import { BlogMeta } from "@/app/blog/*/page.mdx";

function BlogCard({ title, description, link }: { title: string, description: string, link: string }) {
  return <div className="group card max-w-full transition-transform duration-100 hover:scale-105">
    <Link className="card-body" href={link}>
      <h2 className="card-header group-hover:text-blue-300">{title}</h2>
      <p className="text-content2 group-hover:text-blue-300">{description}</p>
    </Link>
  </div>;
}

function BlogList({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col space-y-4">
    {children}
  </div>;
}

function BlogCardWrapper({ metadata, link }: { metadata: BlogMeta, link: string }) {
  const { title, description } = metadata;

  return <BlogCard title={title} description={description} link={link} />;
}

// I really don't like this, but I can't think of a better static way to do this
import { meta as m0 } from "@/app/blog/uoft-cs-guide/page.mdx";
import { meta as m1 } from "@/app/blog/mirrorboard/page.mdx";
import { meta as m2 } from "@/app/blog/split-keyboard/page.mdx";
import { meta as m3 } from "@/app/blog/minecraft-bitcoin/page.mdx";

export default function Home() {
  return <>
    <p className="text-xl font-bold">Blog</p>
    <p>Random writeups.</p>
    <div className="divider"></div>
    <BlogList>
      <BlogCardWrapper metadata={m0} link="/blog/uoft-cs-guide" />
      <BlogCardWrapper metadata={m1} link="/blog/mirrorboard" />
      <BlogCardWrapper metadata={m2} link="/blog/split-keyboard" />
      <BlogCardWrapper metadata={m3} link="/blog/minecraft-bitcoin" />
    </BlogList>
  </>;
}
