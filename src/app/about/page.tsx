import type { Metadata } from "next";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Praveen Dedigamage",
};

export default function AboutPage() {
  return (
    <>
      <Section className="flex min-h-[calc(100vh-88px)] flex-col justify-center gap-6">
        <h1 className="text-3xl font-bold">
          <span className="text-accent">/</span> About Me
        </h1>
        <p className="max-w-2xl leading-relaxed opacity-90">
          Currently a PhD researcher supervised by Prof. Marja-Leena Linne at
          Tampere University, part of a project studying large-scale GPU-based
          simulation of neuron-astrocyte networks using the NEST simulator.
          Previously completed an MSc thesis on spiking neural network
          classifiers for EEG motor-imagery signals.
        </p>
        <p className="max-w-2xl leading-relaxed opacity-90">
          Background in computational neuroscience, spiking neural networks,
          and CUDA/GPU programming, with a focus on making large-scale
          biophysical simulations run efficiently on modern hardware.
        </p>
      </Section>
      <Footer />
    </>
  );
}
