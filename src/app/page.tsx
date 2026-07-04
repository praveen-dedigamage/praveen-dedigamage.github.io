import { projects } from "@/lib/projects";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 py-16">
        <section id="research" className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
            <span className="text-accent">/</span> Research
          </h2>
          <p className="max-w-2xl leading-relaxed opacity-90">
            Currently a PhD researcher supervised by Prof. Marja-Leena Linne
            at Tampere University, part of a project studying large-scale
            GPU-based simulation of neuron-astrocyte networks using the NEST
            simulator. Previously completed an MSc thesis on spiking neural
            network classifiers for EEG motor-imagery signals.
          </p>
        </section>

        <section id="projects" className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">
            <span className="text-accent">/</span> Projects
          </h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <li
                key={project.url}
                className="rounded-xl border border-black/10 p-5 dark:border-white/10"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-accent"
                >
                  {project.title}
                </a>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="flex flex-col gap-4 pb-16">
          <h2 className="text-xl font-semibold">
            <span className="text-accent">/</span> Contact
          </h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a className="hover:text-accent" href="mailto:eng.chamal@gmail.com">
                eng.chamal@gmail.com
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent"
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
