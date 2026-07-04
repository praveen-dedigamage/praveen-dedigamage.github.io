import Image from "next/image";

const badges = [
  { label: "CUDA", className: "left-2 top-6 bg-[#76b900] text-black" },
  { label: "Py", className: "right-0 top-2 bg-[#3776ab] text-white" },
  { label: "C++", className: "left-0 top-1/2 bg-[#00599c] text-white" },
  { label: "NEST", className: "right-2 top-1/3 bg-[#0b5ed7] text-white" },
  { label: "PyTorch", className: "left-6 bottom-4 bg-[#ee4c2c] text-white" },
  { label: "Brian2", className: "right-6 bottom-2 bg-accent text-black" },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 px-6 py-20 sm:grid-cols-2"
    >
      <div className="flex flex-col items-start gap-4">
        <p className="opacity-70">Hello 👋, I&apos;m</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Praveen Dedigamage</h1>
        <p className="text-2xl font-semibold text-accent">
          PhD Researcher — Computational Neuroscience &amp; GPU Computing
        </p>
        <p className="max-w-md opacity-80">
          Working on computational astrocyte models and large-scale GPU-based
          neuron-astrocyte simulations at Tampere University.
        </p>
        <a
          href="#contact"
          className="mt-4 rounded-full bg-accent px-8 py-3 font-semibold text-black hover:opacity-90"
        >
          Contact
        </a>
      </div>

      <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
        <div className="absolute inset-0 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-accent/30 to-blue-500/20" />
        <Image
          src="/profile.png"
          alt="Praveen Dedigamage"
          fill
          className="relative rounded-full object-cover p-6"
        />
        {badges.map((badge) => (
          <span
            key={badge.label}
            className={`absolute rounded-lg px-2 py-1 text-xs font-semibold shadow-md ${badge.className}`}
          >
            {badge.label}
          </span>
        ))}
      </div>
    </section>
  );
}
