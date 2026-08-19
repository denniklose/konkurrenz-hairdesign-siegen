import Link from "next/link";
import BrandMark from "./components/BrandMark";
import ConsentMap from "./components/ConsentMap";
import HoursCard from "./components/HoursCard";
import ImageCard from "./components/ImageCard";
import ServiceCard from "./components/ServiceCard";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { history, salon, services, site } from "./site-data";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata("home");

const salonSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: site.name,
  telephone: site.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address[0],
    addressLocality: site.address[1],
    addressCountry: "DE"
  },
  url: site.websiteUrl
};

export default function Home() {
  return (
    <main id="top">
      {!salon.template.isStarter ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(salonSchema) }}
        />
      ) : null}
      <SiteHeader />

      <section className="home-hero section-shell" id="start" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">{salon.hero.eyebrow}</p>
          <h1 id="home-title">
            <span>{salon.hero.titleLead}</span>
            <span className="accent-text">{salon.hero.titleAccent}</span>
          </h1>
          <p className="hero-intro">{salon.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={site.phoneHref}>
              {salon.hero.ctaLabel} <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="heritage-proof">
            <span aria-hidden="true">✦</span>
            <span>{salon.hero.trustLine}</span>
          </div>
        </div>

        <div className="hero-bento" aria-label="Salon auf einen Blick">
          <ImageCard
            image={salon.hero.primaryImage}
            className="hero-image-card"
            priority
            sizes="(max-width: 760px) 100vw, 68vw"
          />
          <ImageCard
            image={salon.hero.secondaryImage}
            className="hero-mens-card"
            sizes="(max-width: 760px) 100vw, 34vw"
          />
          <article className="bento-card history-card">
            <p className="section-kicker">{salon.historySection.kicker}</p>
            <strong>{history[0].year}</strong>
            <span>{history[0].copy}</span>
          </article>
          <a className="bento-card phone-card" href={site.phoneHref}>
            <BrandMark className="phone-card-mark" />
            <span className="phone-card-copy">
              Für Schnitt, Farbe oder Pflege erreichst du uns direkt.
            </span>
            <small>Termin vereinbaren</small>
            <strong>{site.phoneDisplay}</strong>
          </a>
        </div>
      </section>

      <section className="services-section section-shell" id="leistungen" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">{salon.servicesSection.kicker}</p>
            <h2 id="services-title">{salon.servicesSection.title}</h2>
          </div>
          <p>{salon.servicesSection.intro}</p>
        </div>

        <div className="services-bento">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
          <ImageCard
            image={salon.serviceImages[0]}
            className="service-image service-image-blonde"
            sizes="(max-width: 760px) 100vw, 30vw"
          />
          <ImageCard
            image={salon.serviceImages[1]}
            className="service-image service-image-copper"
            sizes="(max-width: 760px) 100vw, 30vw"
          />
          <ImageCard
            image={salon.serviceImages[2]}
            className="service-image service-image-mens"
            sizes="(max-width: 760px) 100vw, 30vw"
          />
        </div>
      </section>

      <section className="heritage-section section-shell" aria-labelledby="heritage-title">
        <div className="section-heading section-heading-centered">
          <p className="section-kicker">{salon.historySection.kicker}</p>
          <h2 id="heritage-title">{salon.historySection.title}</h2>
          <p>{salon.historySection.intro}</p>
        </div>
        <div className="history-bento">
          {history.map((item) => (
            <article className="bento-card timeline-card" key={item.year}>
              <strong>{item.year}</strong>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
          <blockquote className="bento-card heritage-quote">
            <p>„{salon.historySection.quote}“</p>
            <footer>{salon.historySection.quoteSource}</footer>
          </blockquote>
        </div>
        <div className="section-link-row">
          <Link className="text-link" href="/ueber-uns">
            Unsere Geschichte entdecken <span aria-hidden="true">→</span>
          </Link>
          <Link className="text-link" href="/salon">
            Mehr über den Salon <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="contact-section section-shell" aria-labelledby="contact-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Öffnungszeiten &amp; Anfahrt</p>
            <h2 id="contact-title">In {site.address[1]} für dich da.</h2>
          </div>
          <p>{site.address.join(" · ")} · Telefon {site.phoneDisplay}</p>
        </div>
        <div className="contact-bento">
          <HoursCard />
          <ConsentMap />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
