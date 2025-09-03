export type Project = {
  slug: string;
  title: string;
  description: string;
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "Personal website built with Next.js and Tailwind CSS.",
    url: "https://crawford-young.github.io",
    repo: "https://github.com/Crawford-Young/Crawford-Young.github.io",
  },
  {
    slug: "web-dev-club",
    title: "Web Dev Weekly Projects",
    description: "Weekly projects for the Web Dev Club at Auburn University.",
    url: "",
    repo: "https://github.com/Crawford-Young/WebDev",
  },
  {
    slug: "ai-chess-bot",
    title: "AI Chess Bot",
    description: "Chess AI for assigning relevant puzzles to each player based on their games.",
    url: "",
    repo: "https://github.com/Crawford-Young/ChessBot",
  },
  {
    slug: "instrument-tuner",
    title: "Instrument Tuner",
    description: "Tool for tuning instruments from microphone input.",
    url: "",
    repo: "https://github.com/Crawford-Young/InstrumentTuner",
  },
];


