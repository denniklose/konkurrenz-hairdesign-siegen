import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "../site-data";

type CallToActionProps = {
  kicker: string;
  title: string;
  copy: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children?: ReactNode;
};

export default function CallToAction({
  kicker,
  title,
  copy,
  secondaryHref,
  secondaryLabel,
  children,
}: CallToActionProps) {
  return (
    <section className="page-cta section-shell">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
      <div className="page-cta-actions">
        <a className="button button-primary" href={site.phoneHref}>
          Termin telefonisch vereinbaren
        </a>
        {secondaryHref && secondaryLabel ? (
          <Link className="button button-secondary" href={secondaryHref}>
            {secondaryLabel}
          </Link>
        ) : null}
        {children}
      </div>
    </section>
  );
}
