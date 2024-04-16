import Link from "next/link";
import React from "react";
import MediaDisplay from "@/app/components/media_display";
import {
  DevPostIcon, DiscordIcon,
  DocumentIcon,
  ExternalLinkIcon,
  GitHubIcon,
  RedditIcon,
  YouTubeIcon
} from "@/app/components/icons/buttons";
import { project_list, ProjectData, ProjectLinkType } from "@/app/projects/project_info";

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
    <div className="card card-image-cover w-full max-w-none transition-transform hover:scale-105">
      <div className="card-body">
        <p className="card-header">{data.title}</p>
        <p className="italic">{data.subtitle}</p>

        <div className="relative rounded-md mb-3 overflow-clip h-52">
          {<MediaDisplay type={data.media.type === "image" ? "image" : "gfycat"} link={data.media.src}
                         autoplay={true} />}
        </div>

        <p>{data.description}</p>
        <div className="flex justify-between items-center">
          <div>
            {data.blog ?
              <Link className="btn-primary btn hover:btn-success" href={data.blog}>
                Learn More
              </Link>
              : undefined}
          </div>

          <div className="flex space-x-1 justify-end overflow-x-clip">
            {data.links.map((link, i) => <IconMap key={i} type={link.type} tooltip={link.text} link={link.href} />)}
          </div>
        </div>
      </div>
    </div>
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
