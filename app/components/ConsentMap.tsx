"use client";

import { useState } from "react";
import { salon } from "../site-data";

export default function ConsentMap() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { map } = salon;

  if (map.mode === "link-only") {
    return (
      <div className="map-embed map-embed-consent">
        <div className="map-consent-copy">
          <p className="section-kicker">Anfahrt</p>
          <h2>So findest du uns.</h2>
          <p>Die Route öffnet sich erst nach deinem Klick bei Google Maps.</p>
          <a
            className="button button-primary"
            href={map.directionsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {map.routeLabel}
          </a>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="map-embed map-embed-consent">
        <div className="map-consent-copy">
          <p className="section-kicker">Anfahrt</p>
          <h2>Karte erst nach Klick laden.</h2>
          <p>{map.consentCopy}</p>
          <div className="map-consent-actions">
            <button
              className="button button-primary"
              type="button"
              onClick={() => setIsLoaded(true)}
            >
              {map.consentLabel}
            </button>
            <a href={map.directionsUrl} target="_blank" rel="noreferrer">
              {map.routeLabel} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="map-embed map-embed-loaded">
      <iframe
        title={map.title}
        src={map.embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a href={map.directionsUrl} target="_blank" rel="noreferrer">
        {map.routeLabel} <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
