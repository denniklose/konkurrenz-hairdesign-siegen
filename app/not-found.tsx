import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { site } from "./site-data";

export default function NotFound() {
  return (
    <main className="inner-page">
      <SiteHeader inner />
      <section className="page-cta section-shell not-found-page">
        <p className="section-kicker">404</p>
        <h1>Diese Seite gibt es nicht.</h1>
        <p>Zurück zur Startseite oder ruf den Salon direkt an.</p>
        <div className="page-cta-actions">
          <Link className="button button-primary" href="/">
            Zur Startseite
          </Link>
          <a className="button button-secondary" href={site.phoneHref}>
            {site.phoneDisplay} anrufen
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
