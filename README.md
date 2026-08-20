# Konkurrenz Hairdesign · Kundenentwurf V2

Private Next.js-Website für Konkurrenz Hairdesign in Siegen. Das Dark-Bento-Design, die Helvetica-Typografie, Seitenstruktur, Navigation, CTA-Flüsse und das responsive Verhalten des freigegebenen Ausgangstemplates bleiben erhalten. Der Akzent ist auf `#e05a5a` umgestellt.

## Status

**Öffentlicher Vercel-Draft, keine Kundenübergabe.** Diese V2 läuft separat unter [konkurrenz-hairdesign-siegen2.vercel.app](https://konkurrenz-hairdesign-siegen2.vercel.app/). Die bisherige URL [konkurrenz-hairdesign-siegen.vercel.app](https://konkurrenz-hairdesign-siegen.vercel.app/) bleibt unverändert. Der Handover-Status bleibt `draft`; rechtlicher Betreiber, E-Mail, Rechtsdaten, finale Kundenbestätigung der Öffnungszeiten, Assetfreigaben sowie Domain/Billing stehen noch **zur Freigabe**.

## Verifizierte Basisdaten

- Konkurrenz Hairdesign, Friseur in Siegen
- Bürbacher Weg 86, 57074 Siegen
- Telefon: 0271 2387718 (mehrfach passende öffentliche Verzeichnisse; finale Salonfreigabe ausstehend)
- Inhalt: Neutrale Texte zu Beratung, Schnitt, Styling und Finish; aktuelle Öffnungszeiten aus dem geprüften Google-Unternehmensprofil; keine erfundenen Preise, Bewertungen oder Teamnamen
- Karte: click-to-load; keine Google-Maps-Einbettung vor bewusstem Klick

Alle Quellen, Konflikte und Nicht-Veröffentlichungsentscheidungen stehen in [RESEARCH_LEDGER.md](./RESEARCH_LEDGER.md). Der aktuelle Intake mit offenen Freigaben steht in [SALON_INTAKE.md](./SALON_INTAKE.md).

## Qualitätssicherung

```bash
npm ci
npm run check:template
npm run lint
npx tsc --noEmit
npm run build
npm run check:handover
```

`npm run check` ist ein Alias für `npm run check:handover`. Es muss bis zur vollständigen Kundenfreigabe erwartungsgemäß fehlschlagen.

## Relevante Dateien

| Datei | Zweck |
| --- | --- |
| `config/salon.json` | Zentraler Inhalt, Design, SEO, Kartenmodus und Handover-Status |
| `config/asset-manifest.json` | Quelle, Lizenz, Alt-Text und Freigabestatus aller aktiven Assets |
| `SALON_INTAKE.md` | Bestätigte Daten und offene Freigaben |
| `RESEARCH_LEDGER.md` | Öffentliche Quellen, Vertrauensstufen und Ausschlüsse |
| `HANDOVER_CHECKLIST.md` | Übergabe- und Deployment-Sperren |
