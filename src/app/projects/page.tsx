import type { Metadata } from "next";
import Section from "@/components/Section";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio — Praveen Dedigamage",
};

export default function ProjectsPage() {
  return (
    <Section className="flex min-h-[calc(100vh-88px)] flex-col gap-8 justify-center">
      <h1 className="text-3xl font-bold">
        <span className="text-accent">/</span> Portfolio
      </h1>
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
    </Section>
  );
}
