import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href="/IMG_0827.jpg">
        <Image
          src="/.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I'm Nisarg Trivedi
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm currently a sophomore pursuing B.Tech in Information and Communication Technology at{" "}
          <a href="https://www.daiict.ac.in/" target="_blank" rel="noopener noreferrer">
            DAIICT
          </a>.
        </p>

        <p>
          My current areas of research are Speech Processing and Natural Language Processing.
        </p>

        <p>
          I'm passionate about creating impactful projects—especially in generative AI and related fields.
        </p>

        <p>
          I also run a{" "}
          <a href="https://www.youtube.com/@nktrivedi" target="_blank" rel="noopener noreferrer">
            YouTube channel
          </a>{" "}
          where I share tech tutorials, project walkthroughs, and learning tips to help fellow developers grow.
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
