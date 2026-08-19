# Friseursalon Starter – Arbeitsregeln

## Produktziel

Diese App ist eine wiederverwendbare Website-Vorlage für Friseursalons. Das Dark-Bento-Design, die Helvetica-Schriftrollen, Seitenstruktur, Bildflächen, Kontakt-CTA und das mobile Verhalten sollen erhalten bleiben.

## Konfiguration zuerst

- Alle kundenspezifischen Inhalte gehören in config/salon.json.
- Bildrechte und Freigaben gehören in config/asset-manifest.json.
- Keine echten Kundendaten in Komponenten, CSS oder Metadaten fest einbauen.
- Keine Fakten, Bewertungen, Marken, Preise, Teammitglieder, E-Mails oder Rechtstexte erfinden.

## Sicherheit und Übergabe

- Google Maps nur per click-to-load oder link-only; niemals beim initialen Seitenaufruf einbetten.
- Erst ein neues Vercel-Projekt für jeden Kunden anlegen; keine bestehende Kunden-URL überschreiben.
- Vor Übergabe npm run check:handover, npm run lint, npx tsc --noEmit und npm run build ausführen.
- Starter-Platzhalter dürfen niemals als finale Kundeninhalte markiert werden.

## Design

- Überschriften: Helvetica Bold.
- Lauftext: Helvetica Regular.
- Bestehende Dark-Flächen, große abgerundete Karten, klare Bildkompositionen und Akzentfarbe beibehalten.
- Pro Kunde nur Logo, Akzentfarbe, Bilder, bestätigte Inhalte und kleine Moduloptionen ändern, sofern nichts anderes beauftragt ist.


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
