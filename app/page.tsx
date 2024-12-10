import MediaDisplay from "@/app/components/media_display";
import { ExternalLink } from "@/app/components/external_link";

export default function Home() {
  return <>
    <p className="text-xl font-bold">
      {"Hi, I'm Hanmin!"}
    </p>
    <p>I'm a Computer Science student at the University of Toronto. I'm mainly interested in back-end development
      and systems programming, but I'm always looking to learn new things!</p>

    <p>I've interned at Citadel in New York over the fall, and in the summer, I interned at Roblox at the San Mateo office. Learn more in the <ExternalLink href="experience/">experience</ExternalLink> section.</p>

    <p>In my free time, I am working on a custom compiler written in Rust to convert my Ingot programming language to
      Minecraft's .mcfunction format.</p>

    <div className="divider"></div>


    <p className="text-xl font-bold">
      Featured
    </p>

    <div className="card card-image-cover max-w-full my-4">
      <div className="card-body">
        <ExternalLink className="card-header"
                      href="https://www.pcgamer.com/this-minecraft-3d-graphing-calculator-is-hypnotic-and-beautiful/">This
          Minecraft 3D graphing calculator is hypnotic and beautiful</ExternalLink>
        <p>PC Gamer article by Rich Stanton</p>
        <div className="rounded-md mb-3 overflow-clip">
          <MediaDisplay type="gfycat" link="https://i.imgur.com/gWPX6uJ.mp4" autoplay={true} />
        </div>
        <p className="text-content2">Thank you <ExternalLink href="https://www.pcgamer.com/author/rich-stanton/">Rich
          Stanton</ExternalLink> for this wonderful article! I'm glad you enjoyed the calculator as much as I enjoyed
          making it.</p>

        <p>
          This project has been incredible; I built the initial prototype several years ago after having some
          unanswered questions in my 11th grade math class. Since then, it has been featured on <ExternalLink
          href="https://www.pcgamer.com/this-minecraft-3d-graphing-calculator-is-hypnotic-and-beautiful/">PC
          Gamer</ExternalLink>, <ExternalLink
          href="https://www.gry-online.pl/newsroom/niezwykly-popis-kreatywnosci-w-minecraft-kalkulator-graficzny/z01d82a">Gry-Online</ExternalLink>, <ExternalLink
          href="https://www.gamepressure.com/newsroom/a-remarkable-display-of-creativity-in-minecraft-graphic-calculato/z2193e">gamepressure</ExternalLink>, <ExternalLink
          href="https://www.destructoid.com/minecraft-real-time-3d-graphing-calculator/">Destructoid</ExternalLink>, <ExternalLink
          href="https://www.gamespark.jp/article/2022/03/09/116686.html">GameSpark</ExternalLink>, and more.
          Additionally,
          since
          its launch in March 2020, the calculator has been viewed 9.6 million times, and downloaded over 8.2 thousand
          times.
        </p>
        <p>
          The project was featured on 6/18/2020 on <ExternalLink
          href="https://www.minecraft.net/en-us/article/new-java-realms--realms-midsummer-celebration-">minecraft.net</ExternalLink> and
          subsequently been available on the Minecraft Realms subscription service.
        </p>
        <p>
          Through several iterations of the calculator, I've learnt a lot about data structures and algorithms, in
          addition to several numerical methods.
          I learnt a lot about floating point arithmetic while implementing it in .mcfunction, and I've learnt a lot
          about several obscure computational algorithms.
        </p>
      </div>
    </div>
  </>;
}
