import { H1 } from "@/components/ui/Typography";

import { Image } from "./image";

export default function Page() {
  return (
    <>
      <H1 className="my-8">
        next/image with{" "}
        <a
          href="https://plaiceholder.co/"
          target="_blank"
          rel="noopener"
          className="underline"
        >
          plaiceholder
        </a>
      </H1>
      {/* @ts-expect-error Async Server Component */}
      <Image
        src="https://opengraph.githubassets.com/3e2e0d38d0967422099b2487ecab99b5ee9b752afb81043623b2571c9a96e540/hajimism/my-playground"
        alt=""
      />
    </>
  );
}
