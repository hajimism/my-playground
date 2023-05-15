import { ZoomableImage } from "./zoomable-image";

export default function Page() {
  return (
    <ZoomableImage
      src="/hajimism.png"
      alt="孟"
      width={400}
      height={400}
      className="block mx-auto mt-40"
    />
  );
}
