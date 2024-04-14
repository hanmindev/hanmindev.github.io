import Link from "next/link";

function DocsCard({ title, description, link }: { title: string, description: string, link: string }) {
  return <div className="group card max-w-full transition-transform duration-100 hover:scale-105">
    <Link className="card-body" href={link}>
      <h2 className="card-header group-hover:text-blue-300">{title}</h2>
      <p className="text-content2 group-hover:text-blue-300">{description}</p>
    </Link>
  </div>;
}

function DocsList({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col space-y-4">
    {children}
  </div>;
}


export default function Home() {
  return <>
    <p className="text-xl font-bold">Docs</p>
    <p>Some of my projects need some additional information, which I have compiled into docs.</p>
    <div className="divider"></div>
    <DocsList>
      <DocsCard title="Guide to the Ingot Programming Language"
                description="Ingot is a high-level programming language that compiles to mcfunction for Minecraft datapack development. Warning: This is under active development and is not yet stable."
                link="https://hanmin.dev/ingot-docs/" />
    </DocsList>
  </>;
}
