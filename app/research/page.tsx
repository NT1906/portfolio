import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Research experience, publications, and presentations",
};

const experience = [
  {
    org: "Jio Institute",
    role: "Summer Research Intern",
    location: "Navi Mumbai, Maharashtra",
    period: "June 2026 – July 2026",
    points: [
      "Extended a CVPR 2026 multimodal failure-detection framework with a reliability-aware fusion mechanism that estimates per-modality trust weights from self-supervised correctness signals: +3.2 AUROC and 17% lower FPR95 over a matched baseline.",
      "Built a 3-modality (video, optical flow, audio) failure-detection pipeline in PyTorch with SlowFast-R101, SlowOnly-R50, and ResNet-18, using adaptive confidence loss and cyclic feature-swapping augmentation (10.99 AURC, 91.5% AUROC).",
      "Added calibration evaluation with Expected Calibration Error (ECE) and Negative Log-Likelihood (NLL), showing a 3.5× calibration improvement under severe modality loss.",
      "Set up a multi-seed evaluation protocol after measuring a 6.6 AURC seed-variance noise floor, so comparisons are reproducible.",
      "Work submitted to AAAI 2027 (under review).",
    ],
  },
  {
    org: "Speech Research Lab, DAU",
    role: "Research Assistant (Advisor: Prof. Hemant A. Patil)",
    location: "Gandhinagar, Gujarat",
    period: "May 2025 – March 2026",
    points: [
      "Collected and preprocessed speech corpora, including low-resource Indian languages and code-switched Hinglish.",
      "Designed and trained models for dysarthria severity classification.",
      "Researched and implemented GAN-based speech synthesis and neural vocoders (BAANI: 296M and a lightweight 7.6M-parameter variant) for low-resource deployment.",
      "Developed APIs integrating speech synthesis and classification modules, and explored audio LLMs for multilingual speech enhancement.",
      "Resulted in 3 peer-reviewed publications (IALP 2025, APSIPA ASC 2025, SPECOM 2026).",
    ],
  },
];

const publications = [
  {
    authors:
      "Nisarg Trivedi, Ravindrakumar M. Purohit, Satyam Tiwari, and Hemant A. Patil",
    title:
      "CoSSHI: LLM-Powered Large-Scale Multitask Hinglish Dataset for Speech Forensics",
    venue:
      "29th International Conference on Asian Language Processing (IALP 2025), Sarawak, Malaysia",
    url: "https://doi.org/10.1109/IALP68296.2024.11156308",
  },
  {
    authors:
      "Siddharth Kumar, Nisarg Trivedi, Ravindrakumar M. Purohit, and Hemant A. Patil",
    title:
      "BAANI: A 296M-Parameter Neural Vocoder for End-to-End Punjabi Speech Synthesis",
    venue:
      "17th Asia-Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA ASC 2025)",
    url: "https://doi.org/10.1109/APSIPAASC65261.2025.11249045",
  },
  {
    authors:
      "Dev Jani, Dhaneshkumar Kapadia, Samarth Modh, Nisarg Trivedi, and Hemant A. Patil",
    title:
      "VocalPlan-AV: A Two-Stage Audio-Visual Framework for Dysarthric ASR Using Vocal-Plan Reconstruction",
    venue:
      "International Conference on Speech and Computer (SPECOM 2026), LNAI vol. 16934, Springer, pp. 267–283",
    url: "https://doi.org/10.1007/978-3-032-37867-5_19",
  },
];

const presentations = [
  {
    title:
      "Research poster: “Analyzing the Geometry of Self-Supervised Learning Models for Hinglish Code-Switched Speech”",
    venue:
      "Youth in High-Dimensions, Abdus Salam International Centre for Theoretical Physics (ICTP), Trieste, Italy, 2026",
  },
  {
    title: "Top 15 teams, Providing Guidance Track, BEA Shared Task Dataset",
    venue:
      "Indian Symposium on Machine Learning Datathon, BITS Pilani Hyderabad, 2025",
  },
  {
    title:
      "Research abstract: “Dynamic Pricing and Multi-Period Inventory Optimization for Perishable Agricultural Commodities”",
    venue: "India Management Research Conference, IIM Ahmedabad, 2025",
  },
  {
    title: "Research poster: “Dyslexia Detection through Handwriting”",
    venue: "Conference on Technology for Disabled Persons, IIM Ahmedabad, 2025",
  },
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-6 text-xl font-medium tracking-tight">{children}</h2>
  );
}

function Author({ authors }: { authors: string }) {
  const name = "Nisarg Trivedi";
  const [before, after] = authors.split(name);
  return (
    <>
      {before}
      <span className="font-semibold text-black dark:text-white">{name}</span>
      {after}
    </>
  );
}

export default function Research() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Research</h1>

      <Heading>Experience</Heading>
      <div className="space-y-8">
        {experience.map((item) => (
          <div key={item.org}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="font-medium text-black dark:text-white">
                {item.org}
              </h3>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.period}
              </span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              {item.role} · {item.location}
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-neutral-800 dark:text-neutral-300">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Heading>Publications</Heading>
      <ol className="list-decimal pl-5 space-y-4 text-neutral-800 dark:text-neutral-300">
        {publications.map((pub) => (
          <li key={pub.title}>
            <Author authors={pub.authors} />, “
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-neutral-400 underline-offset-2 hover:opacity-80"
            >
              {pub.title}
            </a>
            ,” <em>{pub.venue}</em>.
          </li>
        ))}
      </ol>

      <Heading>Presentations &amp; Achievements</Heading>
      <ul className="list-disc pl-5 space-y-3 text-neutral-800 dark:text-neutral-300">
        {presentations.map((item) => (
          <li key={item.title}>
            {item.title}
            <span className="block text-neutral-600 dark:text-neutral-400">
              {item.venue}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
