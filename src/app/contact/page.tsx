import type { Metadata } from "next";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Praveen Dedigamage",
};

export default function ContactPage() {
  return (
    <>
      <Section className="flex min-h-[calc(100vh-88px)] flex-col justify-center gap-6">
        <h1 className="text-3xl font-bold">
          <span className="text-accent">/</span> Contact
        </h1>
        <p className="max-w-xl leading-relaxed opacity-90">
          Feel free to reach out about research collaboration, GPU/HPC
          computing, or anything else.
        </p>
        <ul className="flex flex-col gap-3 text-lg">
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
      </Section>
      <Footer />
    </>
  );
}
