import CallToAction from "../components/CallToAction";
import ImageCard from "../components/ImageCard";
import InnerPageHero from "../components/InnerPageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { history, salon, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("about");

export default function AboutPage() {
  const page = salon.aboutPage;

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

      <section className="page-section section-shell about-bento" aria-labelledby="about-title">
        <article className="bento-card about-story-card">
          <p className="section-kicker">{page.story.kicker}</p>
          <h2 id="about-title">{page.story.title}</h2>
          {page.story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <article className="bento-card about-history-card about-history-origin">
          <strong>{history[0].year}</strong>
          <h3>{history[0].title}</h3>
          <p>{history[0].copy}</p>
        </article>

        <article className="bento-card about-history-combined-card">
          {history.slice(1).map((item) => (
            <div className="about-history-mini" key={item.year}>
              <strong>{item.year}</strong>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </article>

        <ImageCard
          image={page.image}
          className="about-look-card"
          sizes="(max-width: 760px) 100vw, 100vw"
        />
      </section>

      <CallToAction {...page.cta} secondaryHref="/team" secondaryLabel="Das Team" />
      <SiteFooter />
    </main>
  );
}
