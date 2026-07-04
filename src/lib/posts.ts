export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

// Add new posts here — newest first. Each paragraph in `content` renders as
// its own <p>. Keep these to tech/domain-knowledge content (GPU computing,
// computational neuroscience, simulation tooling) rather than personal updates.
export const posts: Post[] = [
  {
    slug: "tripartite-synapse-explained",
    title: "The Tripartite Synapse: Why Astrocytes Matter in Neural Models",
    date: "2026-07-01",
    excerpt:
      "A synapse isn't just pre- and post-synaptic neurons — astrocytes are active third players, and models are starting to reflect that.",
    content: [
      "Classical neural models treat a synapse as a two-party exchange: a presynaptic neuron releases neurotransmitter, a postsynaptic neuron responds. The tripartite synapse framework adds a third element — the astrocyte process wrapped around the synaptic cleft, which senses neurotransmitter spillover, responds with calcium signaling, and releases gliotransmitters back that modulate transmission.",
      "This matters for anyone modeling neural circuits at scale: astrocyte-mediated modulation introduces slower, diffusive feedback loops that can synchronize groups of synapses, contribute to short- and long-term plasticity, and affect network-level dynamics like oscillations or hyperexcitability.",
      "Computationally, this means coupling a fast spiking-neuron model to a much slower calcium-signaling model (typically ODE-based, following formulations like Li-Rinzel or De Pittà-Ullah) — a stiff, multi-timescale system that's non-trivial to simulate efficiently at network scale, which is exactly where GPU acceleration starts to matter.",
    ],
  },
  {
    slug: "gpu-memory-coalescing",
    title: "GPU Memory Coalescing: Why Access Patterns Matter More Than FLOPs",
    date: "2026-07-02",
    excerpt:
      "A kernel with fewer operations can run slower than one with more, purely because of how threads access memory.",
    content: [
      "GPUs execute threads in groups (warps of 32 on NVIDIA hardware). When threads in a warp access global memory, the hardware tries to combine those accesses into as few memory transactions as possible — this is coalescing. If consecutive threads read consecutive addresses, the whole warp's request can be served by one or two transactions instead of 32.",
      "In practice this means data layout often matters more than raw arithmetic intensity: a naive row-major vs. column-major mismatch, or an array-of-structs layout instead of struct-of-arrays, can turn a memory-bound kernel from fast to an order of magnitude slower, with no change to the actual math being computed.",
      "For large-scale neuron-astrocyte simulations, this shows up directly in how per-neuron and per-synapse state variables are laid out in memory — getting this wrong is one of the easiest ways to leave most of a GPU's bandwidth unused.",
    ],
  },
];
