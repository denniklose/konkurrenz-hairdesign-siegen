import Link from "next/link";

type ServiceCardProps = {
  label: string;
  title: string;
  copy: string;
};

export default function ServiceCard({ label, title, copy }: ServiceCardProps) {
  return (
    <article className="bento-card service-card">
      <span className="service-label">{label}</span>
      <h3>{title}</h3>
      <p>{copy}</p>
      <Link href="/termin-buchen" aria-label={"Mehr über " + title + " und Termine erfahren"}>
        Leistungen &amp; Termin <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
