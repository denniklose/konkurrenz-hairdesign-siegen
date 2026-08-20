import ConsentMap from "../components/ConsentMap";
import ContactCard from "../components/ContactCard";
import HoursCard from "../components/HoursCard";
import InnerPageHero from "../components/InnerPageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("contact");

export default function OpeningHoursPage() {
  return (
    <main className="inner-page">
      <SiteHeader inner />
      <InnerPageHero
        eyebrow="Öffnungszeiten & Kontakt"
        title="Öffnungszeiten zur Freigabe."
        intro={"Adresse und Telefonnummer sind bestätigt. Aktuelle Öffnungszeiten bitte direkt beim Salon erfragen: " + site.address[0] + "."}
        ctaLabel="Telefonisch kontaktieren"
        ctaHref={site.phoneHref}
      />

      <section className="page-section section-shell contact-page-bento" aria-labelledby="hours-title">
        <HoursCard className="contact-hours-large" title="Öffnungszeiten zur Freigabe." />
        <ContactCard />
        <ConsentMap />
      </section>
      <SiteFooter />
    </main>
  );
}
