import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { salon, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  const isTemplate = salon.template.isStarter;

  return (
    <main className="inner-page">
      <SiteHeader inner />
      <section className="legal-page-content">
        <p className="section-kicker">Rechtstexte</p>
        <h1>Datenschutz</h1>
        {isTemplate ? (
          <aside className="template-notice">
            Dies ist eine technische Vorlage, keine fertige Datenschutzerklärung.
            Vor Veröffentlichung muss der Text an Betreiber, Hosting, Kartenmodus
            und tatsächliche Datenflüsse angepasst und fachlich geprüft werden.
          </aside>
        ) : null}
        <h2>Verantwortlicher</h2>
        <p className="legal-copy-block">
          {salon.identity.legalName}, {site.address[0]}, {site.address[1]}.
          <br />
          Kontakt: {site.email}
        </p>
        <h2>Kontaktaufnahme</h2>
        <p className="legal-copy-block">{salon.legal.privacyContactCopy}</p>
        <h2>Hosting und Server-Logfiles</h2>
        <p className="legal-copy-block">{salon.legal.privacyHostingCopy}</p>
        <h2>Kartenansicht</h2>
        <p className="legal-copy-block">{salon.legal.privacyMapsCopy}</p>
        <h2>Keine eigenen Analyse-Tools</h2>
        <p className="legal-copy-block">
          Diese Aussage darf nur veröffentlicht werden, wenn sie für den finalen
          technischen Stand zutrifft.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
