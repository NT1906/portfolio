import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <a href="/IMG_0827.jpg">
        <Image
          src="/IMG_0827.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={140}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I'm Nisarg Trivedi
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a third-year B.Tech student in Information and Communication
          Technology at{" "}
          <a href="https://www.daiict.ac.in/" target="_blank" rel="noopener noreferrer">
            Dhirubhai Ambani University
          </a>{" "}
          (formerly DA-IICT), Gandhinagar.
        </p>

        <p>
          My research is in speech processing and multimodal deep learning. At
          the Speech Research Lab, DAU, I work with Prof. Hemant A. Patil on
          low-resource Indian-language speech, code-switched Hinglish, neural
          vocoders, and dysarthric speech. That work has led to three
          peer-reviewed papers at IALP 2025, APSIPA ASC 2025, and SPECOM 2026.
        </p>

        <p>
          This summer I was a research intern at{" "}
          <a href="https://www.jioinstitute.edu.in/" target="_blank" rel="noopener noreferrer">
            Jio Institute
          </a>
          , where I built a reliability-aware fusion method for multimodal
          failure detection. That work is now under review at AAAI 2027.
        </p>

        <p>
          More on my <Link href="/research">research</Link> and{" "}
          <Link href="/projects">projects</Link>.
        </p>

        <p>
          I also run a{" "}
          <a href="https://www.youtube.com/@nktrivedi" target="_blank" rel="noopener noreferrer">
            YouTube channel
          </a>{" "}
          where I share tech tutorials, project walkthroughs, and learning tips.
        </p>

        <p>
          <a href="/resume.pdf" download className="text-blue-600 hover:underline">
            Download my resume here.
          </a>
        </p>
      </div>
    </section>
  );
}
