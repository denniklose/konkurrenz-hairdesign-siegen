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
            Dieser Kundenentwurf darf nicht veröffentlicht werden. Betreiber-,
            Kontakt- und Rechtsdaten stehen noch zur Freigabe und müssen fachlich
            geprüft ergänzt werden.
          </aside>
        ) : null}
        <h2>Angaben gemäß § 5 DDG</h2>
        <p className="legal-copy-block">
          {salon.identity.legalName}
          <br />
          {site.address[0]}
          <br />
          {site.address[1]}
        </p>
        <h2>Kontakt</h2>
        <p className="legal-copy-block">
          Telefon: {site.phoneDisplay}
          <br />
          E-Mail: {site.email}
        </p>
        <h2>Umsatzsteuer-ID</h2>
        <p className="legal-copy-block">
          {salon.legal.taxId || "Vor Veröffentlichung mit dem Salon bestätigen."}
        </p>
        <h2>Berufsangaben</h2>
        <p className="legal-copy-block">
          {salon.legal.professionalTitle || "Vor Veröffentlichung mit dem Salon bestätigen."}
          <br />
          {salon.legal.chamber || "Zuständige Kammer vor Veröffentlichung ergänzen."}
        </p>
        <h2>Streitbeilegung</h2>
        <p className="legal-copy-block">{salon.legal.disputeResolution}</p>
      </section>
      <SiteFooter />
    </main>
  );
}
