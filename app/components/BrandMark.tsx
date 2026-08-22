import Image from "next/image";
import { salon } from "../site-data";

type BrandMarkProps = {
  className?: string;
  sizes?: string;
  tone?: "red" | "white";
};

export default function BrandMark({
  className = "",
  sizes = "48px",
  tone = "red",
}: BrandMarkProps) {
  const logoSrc = tone === "white" ? salon.design.logoLight : salon.design.logo;
  return (
    <span className={("brand-mark " + className).trim()} aria-hidden="true">
      <Image src={logoSrc} alt="" fill sizes={sizes} />
    </span>
  );
}
