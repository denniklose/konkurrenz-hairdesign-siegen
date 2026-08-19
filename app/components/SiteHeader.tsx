import Link from "next/link";
import BrandMark from "./BrandMark";
import { navigation, site } from "../site-data";

type SiteHeaderProps = {
  inner?: boolean;
};

export default function SiteHeader({ inner = false }: SiteHeaderProps) {
  return (
    <header
      className={"site-header" + (inner ? " site-header-inner" : "")}
      aria-label="Hauptnavigation"
    >
      <Link className="wordmark" href="/" aria-label={site.name + " – Startseite"}>
        <BrandMark className="wordmark-badge" sizes="44px" />
        <span className="wordmark-copy">
          <strong>{site.name}</strong>
          <small>{site.descriptor}</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Seitennavigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-contact">
        <a className="header-phone" href={site.phoneHref}>
          {site.phoneDisplay}
        </a>
      </div>

      <details className="mobile-menu">
        <summary><span>Menü</span><i aria-hidden="true" /></summary>
        <nav aria-label="Mobile Seitennavigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={site.phoneHref}>{site.phoneDisplay} anrufen</a>
        </nav>
      </details>
    </header>
  );
}
