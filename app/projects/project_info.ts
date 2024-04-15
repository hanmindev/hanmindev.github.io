export type ProjectMediaData = { type: "image" | "video", src: string };
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
    title: "The Ingot Programming Language and The BlastFurnace Compiler",
    subtitle: "Streamlining Minecraft Data Pack development by providing modern programming features.",
    description: "Minecraft Data Pack developers have been plagued with poor and verbose syntax, barebones functionality, and expensive abstractions. This toolset aims to change that. Warning: This is in early development",
    media: { type: "image", src: "https://i.imgur.com/jgmVqy9.png" },
    links: [
      {
        type: "github",
        href: "https://github.com/hanmindev/blastfurnace",
        text: "BlastFurnace Compiler GitHub"
      }
    ],
    blog: "https://hanmin.dev/ingot-docs/"
  },
  {
    title: "Lucid - Hack the North 2022 Winner",
    subtitle: "Let's turn that book into a movie. Text to movie, directed by AI.",
    description: "Paste in a text and it will identify the key scenes before turning it into a narrated movie. Favourite book, historical battle, or rant about work. Anything and everything, if you can read it, Lucid can dream it.",
    media: { type: "video", src: "https://i.imgur.com/klWu8Ds.mp4" },
    links: [
      {
        type: "devpost",
        href: "https://devpost.com/software/lucid-ai-95nerk",
        text: "DevPost"
      },
      {
        type: "github",
        href: "https://github.com/underHA/htn-2022",
        text: "GitHub"
      },
      {
        type: "youtube",
        href: "https://youtu.be/9e8J4VNFXOM",
        text: "YouTube"
      }
    ]
  },
  {
    title: "Pitch.ai - nwHacks 2022 First Place",
    subtitle: "Real-time AI-powered presentation creation",
    description: "Being unable to create visual presentations can be a barrier to learning, a reason for feeling left out, or a career disadvantage. Pitch.ai changes that.",
    media: { type: "image", src: "https://i.imgur.com/U6GCUiA.png" },
    links: [
      {
        type: "devpost",
        href: "https://devpost.com/software/pitch-ai",
        text: "DevPost"
      },
      {
        type: "github",
        href: "https://github.com/underHA/nwhacks-2022",
        text: "GitHub"
      },
      {
        type: "youtube",
        href: "https://youtu.be/j1iAbKbSlD8",
        text: "YouTube"
      }
    ]
  },
  {
    title: "HabiFix - Hack the 6ix 2021 Third Place",
    subtitle: "Successful people are the product of successful habits. Let's fix yours.",
    description: "We took the advice from a Harvard research paper to create a program that would not only help break unhealthy habits, but form healthy ones in place as well.",
    media: { type: "image", src: "https://i.imgur.com/YYR1EZd.png" },
    links: [
      {
        type: "devpost",
        href: "https://devpost.com/software/habifix",
        text: "DevPost"
      },
      {
        type: "github",
        href: "https://github.com/eqzhou81/HabiFix/",
        text: "GitHub"
      },
      {
        type: "youtube",
        href: "https://youtu.be/r-5LTZLSj7Y",
        text: "YouTube"
      }
    ]
  },
  {
    title: "Mirrorboard",
    subtitle: "One-handed Typing for Efficiency, Accessibility, and Fun",
    description: "Tired of moving your hand back and forth from the mouse to the keyboard? The answer is probably no but here it is anyways.",
    media: { type: "image", src: "https://i.imgur.com/RLtDT4C.png" },
    links: [
      {
        type: "discord",
        href: "https://discord.gg/rwNn9HcD56",
        text: "Discord"
      },
      {
        type: "github",
        href: "https://github.com/hanmindev/mirrorboard",
        text: "GitHub"
      },
      {
        type: "youtube",
        href: "https://youtu.be/25-bn42cae4",
        text: "YouTube"
      }
    ],
    blog: "/blog/mirrorboard"
  },

  {
    title: "Real-Time 3D Graphing in Vanilla Minecraft",
    subtitle: "Who said games can't be educational?",
    description: "The third iteration of this calculator brings incredible performance benefits and a new UI. At 8 kiloFLOPS, it is 100x faster than the SAT-approved TI-84.",
    media: { type: "video", src: "https://i.imgur.com/gWPX6uJ.mp4" },
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
  },

  {
    title: "MCMV",
    subtitle: "Motion Capture to Voxel Animation Converter",
    description: "Convert your motion capture data into a format compatible with Blockbench to export it as an .OBJ, as a .FBX, to Minecraft, and more!",
    media: { type: "video", src: "https://i.imgur.com/TbVdAC6.mp4" },
    links: [
      {
        type: "github",
        href: "https://github.com/hanmindev/MCMV",
        text: "GitHub"
      },
      {
        type: "youtube",
        href: "https://www.youtube.com/watch?v=L2yVFUgoeBY",
        text: "YouTube"
      }
    ]
  },

  {
    title: "Bitcoin Miner in Minecraft",
    subtitle: "Mining the world-famous cryptocurrency on the world-famous mining software",
    description: "Tuition is expensive. Bitcoin (was) at it's all-time high. Why not mine it in *Mine*craft?",
    media: { type: "image", src: "https://i.imgur.com/crIo7qY.png" },
    links: [
      {
        type: "github",
        href: "https://github.com/hanmindev/minecraft-ntgbtminer",
        text: "GitHub"
      },
      {
        type: "youtube",
        href: "https://youtu.be/sLClfQdmzPw",
        text: "YouTube"
      }
    ],
    blog: "/blog/minecraft-bitcoin"
  },

  {
    title: "Cloth Physics in Minecraft",
    subtitle: "Wouldn't it be funny if someone actually made this?",
    description: "I can't even remember why I made this, I was 16 and was bored during covid",
    media: { type: "video", src: "https://i.imgur.com/q6GdBp6.mp4" },
    links: []
  },

  {
    title: "4D Object Rendering in Minecraft",
    subtitle: "Hypercubes make my head hurt",
    description: "Surprisingly there aren't many places you can find a 4D object renderer. I made one.",
    media: { type: "image", src: "https://i.imgur.com/g9urpsV.png" },
    links: []
  },

  {
    title: "Wave Phenomenon using Huygens–Fresnel principle",
    subtitle: "Waves are hard",
    description: "During physics class, our class had disagreements on whether Huygens' principle was correct or not. I decided to make a program to prove it.",
    media: { type: "video", src: "https://i.imgur.com/r7JVHlx.mp4" },
    links: []
  },

  {
    title: "A Sound Mood - XdHacks LA 2020 Second Place",
    subtitle: "Music is a powerful tool. Let's use it to help people.",
    description: "A Discord application that uses the Spotify API to track songs and provide feedback.",
    media: { type: "image", src: "https://i.imgur.com/aHdWwpt.png" },
    links: []
  },

  {
    title: "COVID Policy Tracker - XdHacks COVID 2020 First Place",
    subtitle: "Many policies have been implemented to combat COVID-19. But which ones are effective?",
    description: "Through statistical analysis and COVID-19 data from every participating country, we were able to determine which policies were most effective.",
    media: { type: "image", src: "https://i.imgur.com/bxXDmAC.png" },
    links: []
  },

  {
    title: "Build and Conquer - Base Building RTS",
    subtitle: "Now with 100% more base-building",
    description: "A game where you build a base and then conquer the world. Build more power plants! Build more factories! Launch more satellites!",
    media: { type: "video", src: "https://i.imgur.com/JLIBJSt.mp4" },
    links: []
  },

  {
    title: "Reflections - Mirror and Laser Game",
    subtitle: "A game where the menu took longer than the actual game to make",
    description: `"I created most of the tools they use and I don’t know how they did that!" - "Michael "Searge" Stoyke" , Developer at Mojang AB (I don't know how we did it either)`,
    media: { type: "video", src: "https://i.imgur.com/ZXw2drv.mp4" },
    links: []
  },

  {
    title: "Minecraft 3D Gravity Simulator",
    subtitle: "Watch the systems fly around",
    description: "A 3D gravity simulator that uses the gravitational formula to calculate the forces between objects.",
    media: { type: "video", src: "https://i.imgur.com/4KLZt5f.mp4" },
    links: []
  },

  {
    title: "HeroFair Amusement Park",
    subtitle: "This is funding my education",
    description: "A huge, working amusement park, available on the Minecraft Marketplace!",
    media: { type: "video", src: "https://i.imgur.com/vc8Un1u.mp4" },
    links: []
  },

  {
    title: "Colors - Puzzle Game v2",
    subtitle: "Mind-bending puzzle game, now with more colors!",
    description: "Paint everything, don't run out of moves. Like Gray, but with more colors.",
    media: { type: "video", src: "https://i.imgur.com/mJczvdK.mp4" },
    links: []
  },

  {
    title: "Gray - Puzzle Game",
    subtitle: "Mind-bending puzzle game",
    description: "Stepping on a tile changes it's color. Turn them all on to win.",
    media: { type: "video", src: "https://i.imgur.com/TrRjEvZ.mp4" },
    links: []
  },

  {
    title: "Space Wars - Minecraft Minigame",
    subtitle: "Endless fun in a 3D arena",
    description: "In space, there is no up or down.",
    media: { type: "video", src: "https://i.imgur.com/jo5mT3d.mp4" },
    links: []
  }
];