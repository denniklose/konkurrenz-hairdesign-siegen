# Ein Befehl für einen neuen Salon

Kopiere den folgenden Befehl in einen neuen Codex-Chat. Ersetze nur die drei Angaben in spitzen Klammern. Falls es noch keine Website oder keinen Maps-Link gibt, schreibe bei `QUELLENLINK` einfach `keine Quelle vorhanden`.

```text
Erstelle eine neue Friseursalon-Website für „<SALONNAME>“ in „<ORT>“ auf Basis des privaten Templates https://github.com/denniklose/friseur-salon-starter. Öffentliche Quelle: <QUELLENLINK>. Erstelle dafür ein neues, separates privates GitHub-Kunden-Repository in meinem Account und arbeite ausschließlich darin — überschreibe, ändere oder deploye niemals das Starter-Repository, Link-Wirthen oder eine andere bestehende Kunden-Website. Lies zuerst SALON_INTAKE.md, CODEX_PROMPT.md, ASSET_MANIFEST.md und HANDOVER_CHECKLIST.md vollständig. Behalte das Dark-Bento-Design, Helvetica, die Seitenstruktur, Navigation, CTA-Logik, Bildsprache und Responsive-Verhalten unverändert bei; ändere nur Kundendaten, Logo, Akzentfarbe, Bilder, Texte, Leistungen, Team, Öffnungszeiten, Rechtsdaten und lokale SEO. Recherchiere ausschließlich eindeutig zuordenbare öffentliche Fakten aus der Quelle, markiere jede Unsicherheit klar als „zur Freigabe“ und erfinde niemals Bewertungen, Sterne, Preise, Leistungen, Teammitglieder, Öffnungszeiten, Marken, E-Mail-Adressen, Rechtstexte oder sonstige Claims. Verwende nur freigegebene, klar lizenzierte oder original KI-generierte Bilder und dokumentiere jedes Asset mit Quelle, Lizenz, Alt-Text und Freigabestatus im Asset-Manifest. Google Maps darf ausschließlich nach bewusster Zustimmung per Klick laden; Adresse und Routenlink bleiben vorher sichtbar. Prüfe alle Seiten auf Desktop und Mobil, entferne alle Reste der alten Marke und führe npm ci, npm run check:template, npm run lint, npx tsc --noEmit, npm run build und npm run check:handover aus. Behebe technische Fehler. Erstelle nur bei erfolgreicher Handover-Prüfung ein neues, separates Vercel-Projekt mit einer neuen URL; bei fehlenden Pflichtdaten erstelle keine fertige Kundenübergabe und nenne stattdessen exakt die offenen Punkte. Gib am Ende Repository-Link, Vercel-Link (falls freigegeben), Testergebnisse und offene Freigaben aus.
```

Beispiel:

```text
Erstelle eine neue Friseursalon-Website für „Salon Beispiel“ in „Siegen“ auf Basis des privaten Templates https://github.com/denniklose/friseur-salon-starter. Öffentliche Quelle: https://www.google.com/maps/search/?api=1&query=Salon+Beispiel+Siegen. [Rest des Befehls wie oben unverändert einfügen.]
```

Der vollständige Befehl ist absichtlich streng: Er schützt die bestehende Vorlage und andere Kundenprojekte, erhält das Design und verhindert, dass nicht bestätigte Fakten versehentlich live gehen.
