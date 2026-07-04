export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "figure"; src: string; alt: string; caption: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: ContentBlock[];
};

const p = (text: string): ContentBlock => ({ type: "p", text });
const figure = (src: string, alt: string, caption: string): ContentBlock => ({
  type: "figure",
  src,
  alt,
  caption,
});

// Add new posts here — newest first. Keep these to tech/domain-knowledge
// content (GPU computing, computational neuroscience, simulation tooling)
// rather than personal updates. Figures live in public/blog/.
export const posts: Post[] = [
  {
    slug: "tripartite-synapse-explained",
    title: "The Tripartite Synapse: Why Astrocytes Matter in Neural Models",
    date: "2026-07-01",
    excerpt:
      "A synapse isn't just pre- and post-synaptic neurons — astrocytes are active third players, and models are starting to reflect that.",
    content: [
      p(
        "Classical neural models treat a synapse as a two-party exchange: a presynaptic neuron releases neurotransmitter into the cleft, and a postsynaptic neuron responds via its receptors. That picture is complete enough for a lot of network-level modeling, but it leaves out a third, much slower participant that's wrapped physically around a large fraction of synapses in the brain: the astrocyte."
      ),
      p(
        "An astrocyte's fine perisynaptic processes sit close enough to the cleft to sense neurotransmitter spillover — glutamate in particular. Binding to metabotropic glutamate receptors on the astrocyte membrane triggers an intracellular signaling cascade (via IP3) that releases calcium from internal stores. This calcium signal is the astrocyte's main currency of information processing: it doesn't fire action potentials, it computes through slow calcium transients and waves."
      ),
      figure(
        "/blog/tripartite-synapse.svg",
        "Diagram of the tripartite synapse showing presynaptic neuron, synaptic cleft, postsynaptic neuron, and an astrocyte process exchanging glutamate and gliotransmitter signals",
        "The tripartite synapse: an astrocyte process senses glutamate spillover, signals internally via calcium, and feeds back gliotransmitter to modulate the synapse."
      ),
      p(
        "The feedback loop closes when the astrocyte, in response to its calcium signal, releases gliotransmitters (glutamate, D-serine, ATP, among others) back toward the synapse. Depending on the specific receptors involved, this can potentiate or depress synaptic transmission, effectively giving the astrocyte a say in short-term plasticity — on a timescale of hundreds of milliseconds to seconds, much slower than a spike but much faster than most forms of learning-related plasticity."
      ),
      p(
        "This matters for large-scale modeling for a very practical reason: astrocytes don't just modulate individual synapses independently. A single astrocyte territory can enclose thousands of synapses, so a calcium event in one astrocyte can coordinate plasticity across many synapses at once. That's a plausible mechanism for phenomena like heterosynaptic plasticity, slow oscillatory modulation of network excitability, and even pathological hyperexcitability when astrocyte signaling is disrupted."
      ),
      p(
        "Computationally, coupling this in is expensive in a specific way: it's not that astrocyte models add many more equations (a minimal calcium model can be as few as two or three ODEs), it's that they run on a completely different timescale from spiking neuron dynamics — milliseconds for spikes, seconds for calcium waves. Simulating both together efficiently means either very small time steps that waste most of their resolution on the neuron side, or adaptive/multi-rate integration schemes, both of which get significantly harder to parallelize well on a GPU compared to a pure spiking network."
      ),
    ],
  },
  {
    slug: "gpu-memory-coalescing",
    title: "GPU Memory Coalescing: Why Access Patterns Matter More Than FLOPs",
    date: "2026-07-04",
    excerpt:
      "A kernel with fewer operations can run slower than one with more, purely because of how threads access memory.",
    content: [
      p(
        "It's tempting to reason about GPU kernel performance the way you'd reason about CPU code: count the arithmetic operations, minimize them, done. GPUs punish that intuition quickly, because for most real kernels the bottleneck isn't compute throughput, it's memory bandwidth — and how efficiently that bandwidth gets used depends almost entirely on the access pattern of a warp, not the arithmetic inside it."
      ),
      p(
        "On NVIDIA hardware, threads execute in groups of 32 called warps, and all 32 threads issue their memory instructions together. When the hardware sees that a warp's memory accesses fall into a contiguous, aligned region, it can service the entire warp with a single (or very few) memory transactions. This is coalescing. When the addresses are scattered — strided access, a transposed matrix walked the wrong way, or an array-of-structs layout where each thread needs one field from a much larger struct — the same warp can require up to 32 separate transactions to fetch the same amount of useful data."
      ),
      figure(
        "/blog/gpu-coalescing.svg",
        "Diagram comparing coalesced GPU memory access, where consecutive threads access contiguous memory in one transaction, against strided access, where threads access scattered addresses requiring multiple transactions",
        "Coalesced access lets a warp's requests merge into one transaction; scattered access can require one transaction per thread for the same amount of data."
      ),
      p(
        "The performance gap this produces isn't subtle. A kernel that's memory-bandwidth-bound can lose an order of magnitude of throughput purely from a bad access pattern, with zero change to the actual math being computed. This is why struct-of-arrays (SoA) layouts are so often preferred over array-of-structs (AoS) in performance-sensitive GPU code: SoA naturally lines up each field's values contiguously in memory, so a warp reading 'all the x positions' reads one coalesced block instead of striding through interleaved structs."
      ),
      p(
        "For large-scale neuron (and neuron-astrocyte) simulations specifically, this shows up directly in how per-neuron and per-synapse state variables are laid out. A network with millions of neurons, each carrying several state variables (membrane potential, recovery variables, synaptic conductances, and — once astrocytes are involved — calcium concentration, IP3, gating variables), has a lot of room to get this layout wrong. Getting it right is often a bigger performance win than any amount of clever kernel-level micro-optimization on top of a bad memory layout."
      ),
      p(
        "The practical takeaway when profiling a slow kernel: check memory throughput (achieved vs. theoretical bandwidth) before reaching for arithmetic optimizations. If a kernel is far below peak bandwidth despite being 'memory-bound' on paper, the access pattern — not the compute — is almost always the first thing to fix."
      ),
    ],
  },
];
