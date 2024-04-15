export type ProjectMediaData = { type: "image" | "video", src: string, alt: string };
export type ProjectLinkType = "website" | "github" | "reddit" | "youtube" | "document" | "devpost" | "discord";
export type ProjectLinkData = {
  type: ProjectLinkType,
  href: string,
  text: string
};

export interface ProjectData {
  title: string,
  subtitle: string,
  description: string,
  media: ProjectMediaData,
  links: ProjectLinkData[]
  blog?: string,
}

export const project_list: ProjectData[] = [
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