import Image from "next/image";
import type { ImageAsset } from "../site-data";

type ImageCardProps = {
  image: ImageAsset;
  className: string;
  priority?: boolean;
  sizes?: string;
};

export default function ImageCard({
  image,
  className,
  priority = false,
  sizes = "(max-width: 760px) 100vw, 50vw",
}: ImageCardProps) {
  return (
    <figure className={"bento-card " + className}>
      <Image src={image.src} alt={image.alt} fill priority={priority} sizes={sizes} />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
