export type Project = {
  title: string;
  description: string;
  url: string;
};

// Update this list as repos are added/renamed — pulled from
// github.com/praveen-dedigamage as of 2026-07.
export const projects: Project[] = [
  {
    title: "Cuda-For-Computational-Neuroscience",
    description:
      "Learn CUDA GPU programming through computational neuroscience — LIF neurons, Hodgkin-Huxley models, synaptic networks, and STDP, from first principles to 100k-neuron simulations.",
    url: "https://github.com/praveen-dedigamage/Cuda-For-Computational-Neuroscience",
  },
  {
    title: "MPI-Course",
    description: "MPI + Multi-GPU C++ programming course — Jupyter notebooks for Colab/local.",
    url: "https://github.com/praveen-dedigamage/MPI-Course",
  },
  {
    title: "CUDA C++ Course (Beginner / Intermediate / Advanced)",
    description:
      "Three-part CUDA C++ course: from zero to real GPU programs, through shared memory/coalescing/streams, up to cooperative groups, tensor cores, and multi-GPU.",
    url: "https://github.com/praveen-dedigamage/cuda-cpp-course-beginner",
  },
  {
    title: "FBCSP SNN Motor-Imagery Classifier",
    description: "Spiking neural network EEG motor-imagery classifier using FBCSP for spatial enhancement before spike encoding.",
    url: "https://github.com/praveen-dedigamage/fbcsp-snn-sgd-mi-classifier",
  },
  {
    title: "LIF_Simulator",
    description: "A minimal Leaky Integrate-and-Fire neuron simulator implemented in pure C, no external libraries.",
    url: "https://github.com/praveen-dedigamage/LIF_Simulator",
  },
  {
    title: "Modeling_PPI",
    description:
      "Abstract simulation framework for studying neural mechanisms underlying prepulse inhibition (PPI) using the Brian neural network simulator.",
    url: "https://github.com/praveen-dedigamage/Modeling_PPI",
  },
];
