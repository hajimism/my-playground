import NextImage from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { ComponentProps } from "react";

type ImageProps = ComponentProps<typeof NextImage>;

export const Image = async ({ src, ...props }: ImageProps) => {
  const { base64, img } = await getPlaiceholder(src as string);

  return (
    <NextImage {...img} placeholder="blur" blurDataURL={base64} {...props} />
  );
};
