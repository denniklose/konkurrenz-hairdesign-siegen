import Link from "next/link";
import CallToAction from "../components/CallToAction";
import ImageCard from "../components/ImageCard";
import InnerPageHero from "../components/InnerPageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { salon, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("team");

export default function TeamPage() {
  const page = salon.teamPage;

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

      <section className="page-section section-shell team-bento" aria-labelledby="team-title">
        <article className="bento-card team-intro-card">
          <p className="section-kicker">{page.intro.kicker}</p>
          <h2 id="team-title">{page.intro.title}</h2>
          <p>{page.intro.copy}</p>
          <Link className="text-link" href="/salon">
            Den Salon kennenlernen <span aria-hidden="true">→</span>
          </Link>
        </article>

        <ImageCard
          image={page.image}
          className="team-visual-card"
          priority
          sizes="(max-width: 760px) 100vw, 42vw"
        />

        {page.values.map(([title, copy]) => (
          <article className="bento-card value-card" key={title}>
            <span aria-hidden="true">✓</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <CallToAction
        kicker="Kontakt"
        title="Lust auf einen neuen Look?"
        copy="Ruf kurz an und besprich deinen Terminwunsch direkt mit dem Salon."
        secondaryHref="/oeffnungszeiten"
        secondaryLabel="Öffnungszeiten & Kontakt"
      />
      <SiteFooter />
    </main>
  );
}
