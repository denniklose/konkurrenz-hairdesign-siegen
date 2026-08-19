import BrandMark from "./BrandMark";
import { site } from "../site-data";

export default function ContactCard() {
  return (
    <article className="bento-card address-card">
      <BrandMark className="address-mark" />
      <p className="section-kicker">Adresse</p>
      <h2>
        {site.address[0]}
        <br />
        {site.address[1]}
      </h2>
      <p>
        Für Terminwünsche und Fragen erreichst du den Salon am schnellsten
        telefonisch.
      </p>
      <a className="button button-primary" href={site.phoneHref}>
        {site.phoneDisplay} anrufen
      </a>
    </article>
  );
}
