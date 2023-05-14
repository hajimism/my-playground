import { Image } from "./image";

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* @ts-expect-error Async Server Component */}
      <Image
        src="https://opengraph.githubassets.com/3e2e0d38d0967422099b2487ecab99b5ee9b752afb81043623b2571c9a96e540/hajimism/my-playground"
        alt=""
      />
    </div>
  );
}
