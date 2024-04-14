import Link from "next/link";

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

export default function Home() {
  return <>
    <p className="text-xl font-bold">Blog</p>
    <p>Random writeups.</p>
    <div className="divider"></div>
    <BlogList>
      <BlogCard title="Unofficial UofT CS Min-Max Intern Guide (and other General Advice)"
                description="Still can't get over how much better Waterloo's Co-Op program is? This guide is for you!"
                link="/uoft-cs-guide" />
      <BlogCard title="How I type 80 WPM using One Hand"
                description="I didn't like how I had to switch between my mouse and keyboard so often, so I decided to create a one-handed typing layout. Now I can brush my teeth while programming!"
                link="/mirrorboard" />
      <BlogCard title="My Split Ergonomic Keyboard is a Performance Game Changer"
                description="The Dactyl Manuform is an oddly-shaped keyboard which I've grown to love. Going back to a regular keyboard feels like eating instant noodles after having a gourmet, wallet-breaking meal."
                link="/split-keyboard" />
      <BlogCard title="How to Mine Bitcoin using Minecraft"
                description="Mining the world-famous cryptocurrency using the world-famous mining software."
                link="/minecraft-bitcoin" />
    </BlogList>
  </>;
}
