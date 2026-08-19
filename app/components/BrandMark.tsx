import Image from "next/image";
import { salon } from "../site-data";

type BrandMarkProps = {
  className?: string;
  sizes?: string;
};

export default function BrandMark({
  className = "",
  sizes = "48px",
}: BrandMarkProps) {
  return (
    <span className={("brand-mark " + className).trim()} aria-hidden="true">
      <Image src={salon.design.logo} alt="" fill sizes={sizes} />
    </span>
  );
}
