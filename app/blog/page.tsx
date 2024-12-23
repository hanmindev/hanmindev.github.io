import { BlogMeta } from "@/app/blog/*/page.mdx";
import { Card, CardList } from "@/app/components/card_list";

export const metadata: Metadata = {
  title: "Hanmin Kim",
  description: "Blogs"
};

function BlogCardWrapper({ metadata, link }: { metadata: BlogMeta, link: string }) {
  const { title, description } = metadata;

  return <Card title={title} description={description} link={link} />;
}

// I really don't like this, but I can't think of a better static way to do this
import { metadata as uoft_cs } from "@/app/blog/(blogs)/uoft-cs-guide/page.mdx";
import { metadata as interview } from "@/app/blog/(blogs)/cs-interview-guide/page.mdx";
import { metadata as mirrorboard } from "@/app/blog/(blogs)/mirrorboard/page.mdx";
import { metadata as split_keyboard } from "@/app/blog/(blogs)/split-keyboard/page.mdx";
import { metadata as mcmv } from "@/app/blog/(blogs)/mcmv/page.mdx";
import { metadata as graphing } from "@/app/blog/(blogs)/3d-graphing-minecraft/page.mdx";
import { metadata as btc } from "@/app/blog/(blogs)/minecraft-bitcoin/page.mdx";
import { Metadata } from "next";

export default function Home() {
  return <>
    <p className="text-xl font-bold">Blog</p>
    <p>Random writeups.</p>
    <div className="divider"></div>
    <CardList>
      <BlogCardWrapper metadata={uoft_cs} link="/blog/uoft-cs-guide" />
      <BlogCardWrapper metadata={interview} link="/blog/cs-interview-guide" />
      <BlogCardWrapper metadata={mirrorboard} link="/blog/mirrorboard" />
      <BlogCardWrapper metadata={graphing} link="/blog/3d-graphing-minecraft" />
      <BlogCardWrapper metadata={mcmv} link="/blog/mcmv" />
      <BlogCardWrapper metadata={split_keyboard} link="/blog/split-keyboard" />
      <BlogCardWrapper metadata={btc} link="/blog/minecraft-bitcoin" />
    </CardList>
  </>;
}
