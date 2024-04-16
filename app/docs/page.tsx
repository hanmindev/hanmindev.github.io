import { Card, CardList } from "@/app/components/card_list";

export default function Home() {
  return <>
    <p className="text-xl font-bold">Docs</p>
    <p>Some of my projects need some additional information, which I have compiled into docs.</p>
    <div className="divider"></div>
    <CardList>
      <Card title="Guide to the Ingot Programming Language"
                description="Ingot is a high-level programming language that compiles to mcfunction for Minecraft datapack development. Warning: This is under active development and is not yet stable."
                link="https://hanmin.dev/ingot-docs/" />
    </CardList>
  </>;
}
