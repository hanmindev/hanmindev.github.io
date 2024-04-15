import Link from "next/link";
import React from "react";
import VideoPlayer from "@/app/components/video_player";
import {
  DevPostIcon, DiscordIcon,
  DocumentIcon,
  ExternalLinkIcon,
  GitHubIcon,
  RedditIcon,
  YouTubeIcon
} from "@/app/components/icons/buttons";

type ProjectMediaData = { type: "image" | "video", src: string, alt: string };
type ProjectLinkType = "website" | "github" | "reddit" | "youtube" | "document" | "devpost" | "discord";
type ProjectLinkData = {
  type: ProjectLinkType,
  href: string,
  text: string
};

interface ProjectData {
  title: string,
  subtitle: string,
  description: string,
  media: ProjectMediaData,
  links: ProjectLinkData[]
  blog?: string,
}

const project_list: ProjectData[] = [
  {
    title: "Mirrorboard",
    subtitle: "One-handed Typing for Efficiency, Accessibility, and Fun",
    description: "Tired of moving your hand back and forth from the mouse to the keyboard? The answer is probably no but here it is anyways.",
    media: { type: "image", src: "https://i.imgur.com/RLtDT4C.png", alt: "mirrorboard usage diagram" },
    links: [
      {
        type: "youtube",
        href: "https://youtu.be/25-bn42cae4",
        text: "YouTube"
      },
      {
        type: "discord",
        href: "https://discord.gg/rwNn9HcD56",
        text: "Discord"
      },
      {
        type: "github",
        href: "https://github.com/hanmindev/mirrorboard",
        text: "GitHub"
      }
    ],
    blog: "/blog/mirrorboard"
  },

  {
    title: "Real-Time 3D Graphing in Vanilla Minecraft",
    subtitle: "Who said games can't be educational?",
    description: "The third iteration of this calculator brings incredible performance benefits and a new UI. At 8 kiloFLOPS, it is 100x faster than the SAT-approved TI-84.",
    media: { type: "video", src: "https://i.imgur.com/gWPX6uJ.mp4", alt: "minecraft 3d graphing calculator" },
    links: [
      {
        type: "document",
        href: "https://www.pcgamer.com/this-minecraft-3d-graphing-calculator-is-hypnotic-and-beautiful/",
        text: "PC Gamer article by Rich Stanton"
      },
      {
        type: "github",
        href: "https://github.com/hanmindev/Hmmm",
        text: "GitHub to the Floating Point Library"
      },
      {
        type: "reddit",
        href: "https://www.reddit.com/r/gaming/comments/t8nzay/i_made_a_realtime_3d_graphing_calculator_in/",
        text: "/r/gaming Reddit Post"
      },
      {
        type: "reddit",
        href: "https://www.reddit.com/r/Minecraft/comments/fgzvi9/i_made_a_realtime_3d_graphing_calculator_in/",
        text: "/r/Minecraft Reddit Post"
      },
      {
        type: "youtube",
        href: "https://youtu.be/qeyp5FN_WKk",
        text: "YouTube"
      }
    ]
  }
];

function IconMap({ type, tooltip, link }: { type: ProjectLinkType, tooltip: string, link: string }) {
  let icon;

  switch (type) {
    case "website":
      icon = <ExternalLinkIcon />;
      break;
    case "github":
      icon = <GitHubIcon />;
      break;
    case "reddit":
      icon = <RedditIcon />;
      break;
    case "youtube":
      icon = <YouTubeIcon />;
      break;
    case "document":
      icon = <DocumentIcon />;
      break;
    case "devpost":
      icon = <DevPostIcon />;
      break;
    case "discord":
      icon = <DiscordIcon />;
      break;
    default:
      icon = <DocumentIcon />;
  }


  return <span className="tooltip tooltip-top" data-tooltip={tooltip}>
        <Link href={link}
              target="_blank"
              rel="noreferrer">
            {icon}
        </Link>
      </span>;
}


function ProjectCard({ data }: { data: ProjectData }) {
  return <div className="md:w-1/2 p-2">
    <p className="card card-image-cover w-full max-w-none transition-transform hover:scale-105">
      <div className="card-body">
        <p className="card-header">{data.title}</p>
        <p className="italic">{data.subtitle}</p>

        <div className="relative rounded-md mb-3 overflow-clip h-52">
          {<VideoPlayer type={data.media.type === "image" ? "image" : "gfycat"} video_link={data.media.src}
                        autoplay={true} />}
        </div>

        <p>{data.description}</p>
        <div className="flex justify-between items-center">
          {data.blog ? <div>
            <Link className="btn-primary btn hover:btn-success" href={data.blog}>
              Learn More
            </Link>
          </div> : undefined}

          <div className="flex space-x-1 justify-end">
            {data.links.map((link, i) => <IconMap key={i} type={link.type} tooltip={link.text} link={link.href} />)}
          </div>
        </div>
      </div>
    </p>
  </div>;
}

export default function Home() {
  return <>
    <p className="text-xl font-bold">Projects</p>
    <p>Personal projects have been a large part of my life, and is what made me start learning programming.

      At first I was interested in making video games, but now I'm mainly interested in making tools for development.

      Unfortunately most of my older projects have been lost to time, but there's a good number of them still
      available.</p>
    <div className="divider"></div>

    <div className="flex w-full flex-wrap">
      {project_list.map((project, i) => <ProjectCard key={i} data={project} />)}
    </div>
  </>;
};
