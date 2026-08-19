import Link from "next/link";
import BrandMark from "./BrandMark";
import { navigation, salon, site } from "../site-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <section className="footer-cta" aria-labelledby="footer-cta-title">
        <div>
          <p className="section-kicker">{salon.footer.kicker}</p>
          <h2 id="footer-cta-title">{salon.footer.title}</h2>
        </div>
        <div className="footer-cta-actions">
          <a className="button button-light" href={site.phoneHref}>{salon.footer.ctaLabel}</a>
          <span className="footer-cta-note">{site.phoneDisplay}</span>
        </div>
      </section>

      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="wordmark" href="/">
            <BrandMark className="wordmark-badge" sizes="44px" />
            <span className="wordmark-copy">
              <strong>{site.name}</strong>
              <small>{site.descriptor}</small>
            </span>
          </Link>
          <p>{salon.footer.copy}</p>
        </div>

        <nav className="footer-links" aria-label="Seitennavigation im Footer">
          <span>Navigation</span>
          {navigation.slice(1).map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="footer-links">
          <span>Kontakt</span>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={site.directionsUrl} target="_blank" rel="noreferrer">{site.address[0]}</a>
          <a href={site.directionsUrl} target="_blank" rel="noreferrer">{site.address[1]}</a>
        </div>

        <div className="footer-legal" aria-label="Rechtstexte">
          <span>Rechtliches</span>
          <Link href="/impressum/">Impressum</Link>
          <Link href="/datenschutz/">Datenschutz</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {site.year} {site.name}</span>
        <span>{site.address.join(" · ")}</span>
      </div>
    </footer>
  );
}
