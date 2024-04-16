import Image, { StaticImageData } from "next/image";
import RobloxLogo from "../../public/company_logos/roblox.jpg";
import GraycoreLogo from "../../public/company_logos/graycore.jpg";
import NorvaleLogo from "../../public/company_logos/norvale.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hanmin Kim",
  description: "Experience History"
};

function ExpNode({ src, title, company, duration, location, description }: {
  src: StaticImageData,
  title: string,
  company: string,
  duration: string,
  location?: string,
  description: string
}) {
  return <div className="flex flex-row space-x-4">
    <div className="flex flex-col items-center">
      <Image src={src} alt="company-logo" className="w-16 h-16 min-h-16 min-w-16 rounded-lg" />
      <span className="h-full w-0.5 bg-gray-600 mr-2 mt-2" />
    </div>
    <div>
      <p className="text-xl font-semibold">{title}</p>
      {location ? <p className="italic text-sm">{company} @ {location}</p> :
        <p className="italic text-sm">{company} (Remote)</p>}
      <p className="italic text-sm">{duration}</p>
      <p className="mt-2 mb-4 text-sm">{description}</p>
    </div>
  </div>;
}

function ExpList({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 space-y-2 w-full">{children}</div>;
}


export default function Home() {
  return <>
    <p className="text-xl font-bold">Experience</p>
    <p>Places I've worked at over the years.</p>

    <ExpList>
      <ExpNode src={RobloxLogo} title="Software Engineer Intern" company="Roblox" duration="May 2024 - August 2024"
               location="San Mateo, CA"
               description="I'll be joining Roblox this summer!" />
      <ExpNode src={GraycoreLogo} title="Software Engineering Intern" company="Graycore"
               duration="May 2023 - August 2023"
               description="I did a variety of tasks, such as integrating Nx into our Angular monorepo CI pipeline, creating a custom systems integration to transform and update information between enterprise systems, and buitl a system to automatically track and synchronize data using a custom Hubspot public app and Azure Functions." />
      <ExpNode src={NorvaleLogo} title="Software Developer" company="Norvale"
               duration="August 2018 - December 2022"
               description="I worked with Norvale for many years (even longer if you consider the projects I worked on with them before they were a company!). I was the main developer for several projects where I programmed the game logic, UI, physics engines, and more, which would make their way into Microsoft's Minecraft Marketplace." />
    </ExpList>
  </>;
}
