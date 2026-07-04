export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

// Add new posts here — newest first. Each paragraph in `content` renders as
// its own <p>.
export const posts: Post[] = [
  {
    slug: "starting-my-phd",
    title: "Starting my PhD at Tampere University",
    date: "2026-07-01",
    excerpt:
      "Kicking off a PhD on computational astrocyte models and large-scale GPU-based neuron-astrocyte simulation.",
    content: [
      "I started my PhD at Tampere University, supervised by Prof. Marja-Leena Linne. The focus is on computational astrocyte models and learning to run large-scale, GPU-based neuron-astrocyte simulations.",
      "The first year centers on getting familiar with the NEST simulator and its GPU ecosystem, finishing up my MSc thesis for journal submission, and building out a computational framework for large-scale simulation on HPC infrastructure.",
      "More detailed notes as the literature review and early experiments progress.",
    ],
  },
  {
    slug: "gpu-sandbox-devboard",
    title: "Picking a dev board for a local GPU sandbox",
    date: "2026-07-02",
    excerpt:
      "Before touching a supercomputer, it helps to have a small local sandbox to get GPU programming fundamentals right.",
    content: [
      "One of my first side tasks was selecting a dev board for a local sandbox environment — something to prototype and test GPU code on before it ever touches a shared cluster.",
      "Full writeup and hardware details to follow once the setup is finalized.",
    ],
  },
];
