import { hours, hoursNote } from "../site-data";

type HoursCardProps = {
  className?: string;
  title?: string;
};

export default function HoursCard({
  className = "",
  title,
}: HoursCardProps) {
  return (
    <article className={("bento-card hours-card " + className).trim()}>
      <p className="section-kicker">Öffnungszeiten</p>
      {title ? <h2>{title}</h2> : null}
      <dl className="contact-hours">
        {hours.map(([day, time]) => (
          <div key={day}>
            <dt>{day}</dt>
            <dd>{time}</dd>
          </div>
        ))}
      </dl>
      <p className="contact-note">{hoursNote}</p>
    </article>
  );
}
