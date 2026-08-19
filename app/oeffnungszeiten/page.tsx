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
        title="Wann sind wir für dich da?"
        intro={"Hier findest du Öffnungszeiten, Telefonnummer und den Weg zum Salon in " + site.address[0] + "."}
        ctaLabel={site.phoneDisplay + " anrufen"}
        ctaHref={site.phoneHref}
      />

      <section className="page-section section-shell contact-page-bento" aria-labelledby="hours-title">
        <HoursCard className="contact-hours-large" title="Wann wir für dich da sind." />
        <ContactCard />
        <ConsentMap />
      </section>
      <SiteFooter />
    </main>
  );
}
