import { BlogMeta } from "@/app/blog/*/page.mdx";
import { Card, CardList } from "@/app/components/card_list";

function BlogCardWrapper({ metadata, link }: { metadata: BlogMeta, link: string }) {
  const { title, description } = metadata;

  return <Card title={title} description={description} link={link} />;
}

// I really don't like this, but I can't think of a better static way to do this
import { meta as uoft_cs } from "@/app/blog/uoft-cs-guide/page.mdx";
import { meta as mirrorboard } from "@/app/blog/mirrorboard/page.mdx";
import { meta as split_keyboard } from "@/app/blog/split-keyboard/page.mdx";
import { meta as mcmv } from "@/app/blog/mcmv/page.mdx";
import { meta as graphing } from "@/app/blog/3d-graphing-minecraft/page.mdx";
import { meta as btc } from "@/app/blog/minecraft-bitcoin/page.mdx";

export default function Home() {
  return <>
    <p className="text-xl font-bold">Blog</p>
    <p>Random writeups.</p>
    <div className="divider"></div>
    <CardList>
      <BlogCardWrapper metadata={uoft_cs} link="/blog/uoft-cs-guide" />
      <BlogCardWrapper metadata={mirrorboard} link="/blog/mirrorboard" />
      <BlogCardWrapper metadata={graphing} link="/blog/3d-graphing-minecraft" />
      <BlogCardWrapper metadata={mcmv} link="/blog/mcmv" />
      <BlogCardWrapper metadata={split_keyboard} link="/blog/split-keyboard" />
      <BlogCardWrapper metadata={btc} link="/blog/minecraft-bitcoin" />
    </CardList>
  </>;
}
