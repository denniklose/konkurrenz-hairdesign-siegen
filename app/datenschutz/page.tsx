import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { salon, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  const needsReview = salon.template.isStarter || salon.template.handoverStatus !== "ready";

  return (
    <main className="inner-page">
      <SiteHeader inner />
      <section className="legal-page-content">
        <p className="section-kicker">Rechtstexte</p>
        <h1>Datenschutz</h1>
        {needsReview ? (
          <aside className="template-notice">
            Diese Seite beschreibt die aktuell vorgesehenen Datenflüsse. Die
            vollständige Datenschutzerklärung wird vor dem finalen Betrieb ergänzt.
          </aside>
        ) : null}
        <h2>Verantwortlicher</h2>
        <p className="legal-copy-block">
          Konkurrenz Hairdesign, {site.address[0]}, {site.address[1]}.
          <br />
          Kontakt: {site.phoneDisplay}
        </p>
        <h2>Kontaktaufnahme</h2>
        <p className="legal-copy-block">{salon.legal.privacyContactCopy}</p>
        <h2>Hosting und Server-Logfiles</h2>
        <p className="legal-copy-block">{salon.legal.privacyHostingCopy}</p>
        <h2>Kartenansicht</h2>
        <p className="legal-copy-block">{salon.legal.privacyMapsCopy}</p>
        <h2>Keine eigenen Analyse-Tools</h2>
        <p className="legal-copy-block">
          Auf dieser Website sind derzeit keine eigenen Analyse-Tools eingebunden.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
