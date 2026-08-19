import CallToAction from "../components/CallToAction";
import ImageCard from "../components/ImageCard";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import InnerPageHero from "../components/InnerPageHero";
import { salon, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("salon");

export default function SalonPage() {
  const page = salon.salonPage;

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

      <section className="page-section section-shell salon-bento" aria-labelledby="salon-title">
        <ImageCard
          image={page.image}
          className="salon-original-card"
          priority
          sizes="(max-width: 760px) 100vw, 58vw"
        />

        <article className="bento-card salon-copy-card">
          <p className="section-kicker">{page.intro.kicker}</p>
          <h2 id="salon-title">{page.intro.title}</h2>
          <p>{page.intro.copy}</p>
          <a className="text-link" href={site.phoneHref}>
            {page.intro.linkLabel} <span aria-hidden="true">→</span>
          </a>
        </article>

        <article className="bento-card salon-fact-card salon-fact-card-combined">
          {page.facts.map((fact) => (
            <div className="salon-fact-item" key={fact.title}>
              <strong>{fact.highlight}</strong>
              <h3>{fact.title}</h3>
              <p>{fact.copy}</p>
            </div>
          ))}
        </article>

        {page.wideCards.map((card) => (
          <article className="bento-card salon-wide-card" key={card.title}>
            <div>
              <p className="section-kicker">{card.kicker}</p>
              <h3>{card.title}</h3>
            </div>
            <p>{card.copy}</p>
          </article>
        ))}
      </section>

      <CallToAction {...page.cta} />
      <SiteFooter />
    </main>
  );
}
