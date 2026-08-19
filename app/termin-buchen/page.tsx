import ConsentMap from "../components/ConsentMap";
import HoursCard from "../components/HoursCard";
import InnerPageHero from "../components/InnerPageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { salon, services, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("booking");

export default function BookingPage() {
  const page = salon.bookingPage;

  return (
    <main className="inner-page">
      <SiteHeader inner />
      <InnerPageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        intro={page.hero.intro}
        ctaLabel={page.hero.ctaLabel}
        ctaHref={site.phoneHref}
      />

      <section className="page-section section-shell booking-facts-bento" aria-labelledby="booking-facts-title">
        <article className="bento-card booking-services-card">
          <p className="section-kicker">Leistungen</p>
          <h2 id="booking-facts-title">{page.servicesTitle}</h2>
          <p className="booking-intro">{page.servicesIntro}</p>
          <div className="booking-service-list">
            {services.map((service) => (
              <div className="booking-service-item" key={service.title}>
                <span>{service.label}</span>
                <div>
                  <strong>{service.title}</strong>
                  <p>{service.copy}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="button button-primary" href={site.phoneHref}>
            {site.phoneDisplay} anrufen
          </a>
        </article>

        <HoursCard className="booking-hours-card" title="Wann wir für dich da sind." />
        <ConsentMap />
      </section>
      <SiteFooter />
    </main>
  );
}
