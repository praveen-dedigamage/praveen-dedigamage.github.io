import Image from "next/image";
import Link from "next/link";

const badges = [
  { label: "CUDA", className: "left-2 top-4 bg-[#76b900] text-black" },
  { label: "Py", className: "right-0 top-0 bg-[#3776ab] text-white" },
  { label: "C++", className: "left-0 top-1/2 bg-[#00599c] text-white" },
  { label: "NEST", className: "right-2 top-1/3 bg-[#0b5ed7] text-white" },
  { label: "PyTorch", className: "left-4 bottom-2 bg-[#ee4c2c] text-white" },
  { label: "Brian2", className: "right-4 bottom-0 bg-accent text-black" },
];

export default function Hero() {
  return (
    <section className="h-[calc(100vh-88px)] w-full overflow-hidden">
      <div className="mx-auto grid h-full w-full max-w-[1600px] grid-cols-1 items-start gap-10 px-6 pt-10 pb-6 sm:grid-cols-2 sm:px-10 sm:pt-16 lg:gap-16 lg:px-16">
        <div className="flex flex-col items-start gap-3">
          <p className="opacity-70">Hello 👋, I&apos;m</p>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Praveen Dedigamage</h1>
          <p className="text-xl font-semibold text-accent sm:text-2xl">
            PhD Researcher — Computational Neuroscience &amp; GPU Computing
          </p>
          <p className="max-w-md opacity-80">
            Working on computational astrocyte models and large-scale
            GPU-based neuron-astrocyte simulations at Tampere University.
          </p>
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-accent px-8 py-3 font-semibold text-black hover:opacity-90"
          >
            Contact
          </Link>
        </div>

        <div className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
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
      </div>
    </section>
  );
}
