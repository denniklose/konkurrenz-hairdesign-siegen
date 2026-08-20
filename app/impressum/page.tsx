import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { salon, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("imprint");

export default function ImprintPage() {
  const needsReview = salon.template.isStarter || salon.template.handoverStatus !== "ready";

  return (
    <main className="inner-page">
      <SiteHeader inner />
      <section className="legal-page-content">
        <p className="section-kicker">Rechtstexte</p>
        <h1>Impressum</h1>
        {needsReview ? (
          <aside className="template-notice">
            Diese Seite zeigt die derzeit verfügbaren Kontaktdaten. Vollständige
            Betreiberangaben werden im finalen Impressum ergänzt.
          </aside>
        ) : null}
        <h2>Angaben gemäß § 5 DDG</h2>
        <p className="legal-copy-block">
          Geschäftsbezeichnung: {site.name}
          <br />
          {site.address[0]}
          <br />
          {site.address[1]}
        </p>
        <h2>Kontakt</h2>
        <p className="legal-copy-block">
          Telefon: {site.phoneDisplay}
        </p>
        <h2>Weitere Angaben</h2>
        <p className="legal-copy-block">
          Umsatzsteuer- und Berufsangaben werden im finalen Impressum ergänzt.
        </p>
        <h2>Streitbeilegung</h2>
        <p className="legal-copy-block">{salon.legal.disputeResolution}</p>
      </section>
      <SiteFooter />
    </main>
  );
}
