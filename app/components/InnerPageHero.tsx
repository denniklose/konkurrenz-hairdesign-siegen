import Link from "next/link";
import BrandMark from "./BrandMark";
import { site } from "../site-data";

type InnerPageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function InnerPageHero({
  eyebrow,
  title,
  intro,
  ctaLabel,
  ctaHref,
}: InnerPageHeroProps) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        {ctaLabel && ctaHref ? (
          ctaHref.startsWith("/") ? (
            <Link className="button button-primary" href={ctaHref}>
              {ctaLabel}
            </Link>
          ) : (
            <a className="button button-primary" href={ctaHref}>
              {ctaLabel}
            </a>
          )
        ) : null}
      </div>
      <div className="inner-hero-mark">
        <BrandMark className="inner-hero-logo" sizes="176px" tone="white" />
        <small>{site.address[0]}</small>
        <strong>{site.address[1]}</strong>
      </div>
    </section>
  );
}
