import Image from "next/image";
import { projects } from "@/lib/projects";

const nav = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 border-b border-black/10 bg-background/90 backdrop-blur dark:border-white/10">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm">
          <span className="font-semibold">Praveen Dedigamage</span>
          <ul className="flex gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="hover:underline" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex max-w-3xl flex-col gap-24 px-6 py-16">
        <section id="about" className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Image
            src="/profile.png"
            alt="Praveen Dedigamage"
            width={120}
            height={120}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-semibold">Praveen Dedigamage</h1>
            <p className="mt-2 text-base leading-relaxed opacity-90">
              PhD researcher at Tampere University, working on computational
              astrocyte models and large-scale GPU-based neuron-astrocyte
              simulations. Background in computational neuroscience, spiking
              neural networks, and CUDA/GPU programming.
            </p>
          </div>
        </section>

        <section id="research" className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Research</h2>
          <p className="leading-relaxed opacity-90">
            Currently a PhD researcher supervised by Prof. Marja-Leena Linne
            at Tampere University, part of a project studying large-scale
            GPU-based simulation of neuron-astrocyte networks using the NEST
            simulator. Previously completed an MSc thesis on spiking neural
            network classifiers for EEG motor-imagery signals.
          </p>
        </section>

        <section id="projects" className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <ul className="flex flex-col gap-6">
            {projects.map((project) => (
              <li key={project.url}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:underline"
                >
                  {project.title}
                </a>
                <p className="mt-1 text-sm leading-relaxed opacity-80">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="cv" className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">CV</h2>
          <p className="leading-relaxed opacity-90">
            <a className="font-medium hover:underline" href="/cv.pdf" target="_blank" rel="noreferrer">
              Download CV (PDF)
            </a>
          </p>
        </section>

        <section id="contact" className="flex flex-col gap-4 pb-16">
          <h2 className="text-xl font-semibold">Contact</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a className="hover:underline" href="mailto:eng.chamal@gmail.com">
                eng.chamal@gmail.com
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://github.com/praveen-dedigamage"
                target="_blank"
                rel="noreferrer"
              >
                github.com/praveen-dedigamage
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
