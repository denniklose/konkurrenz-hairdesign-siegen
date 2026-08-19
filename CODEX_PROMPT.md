# Codex Prompt für neue Salon-Websites

Kopiere diesen Auftrag in einen neuen Codex-Chat, nachdem du ein frisches Kunden-Repository aus dem Friseursalon Starter erstellt hast.

> Baue eine Website für den Friseursalon [NAME] in [ORT] auf Basis dieses Repositories.
>
> Behalte das bestehende Dark-Bento-Design, die Helvetica-Typografie, Seitenstruktur, Navigation, Bildkompositionen, CTA-Logik und Responsive-Verhalten bei. Erfinde keine Leistungen, Teammitglieder, Preise, Öffnungszeiten, Bewertungen, Marken, E-Mail-Adressen oder Rechtstexte.
>
> Recherchiere ausschließlich öffentliche, eindeutig zuordenbare Quellen für Name, Adresse, Telefonnummer, Öffnungszeiten, Website, Maps-Link und Social-Media-Profile. Trage bestätigte Daten in config/salon.json ein. Markiere jede unsichere Angabe in SALON_INTAKE.md als offen.
>
> Ersetze das Beispiel-Logo und die Platzhalterbilder nur durch freigegebene oder klar lizenzierte Assets. Aktualisiere zu jedem neuen Asset config/asset-manifest.json mit Quelle, Lizenz, Alt-Text und Freigabestatus.
>
> Die Karte muss standardmäßig erst nach Klick laden. Niemals Google Maps direkt beim Seitenaufruf laden. Behalte map.mode auf click-to-load oder link-only.
>
> Erstelle pro Route passende SEO-Daten, Canonicals, Sitemap und Robots. Verwende keine Google-Bewertungen oder strukturierten Bewertungsdaten ohne belastbare, kundenfreigegebene Quelle.
>
> Vor einem Deployment führe aus: npm run check:template, npm run lint, npx tsc --noEmit, npm run build und npm run check:handover. Behebe alle Fehler. Erstelle für diesen Kunden ein neues Vercel-Projekt und überschreibe niemals eine bestehende Kunden-URL.

