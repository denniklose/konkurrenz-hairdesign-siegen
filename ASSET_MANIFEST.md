# Asset Manifest

Die maschinenlesbare Assetliste liegt in config/asset-manifest.json. Jede Bild- oder Logodatei braucht dort einen Eintrag.

| Feld | Bedeutung |
|---|---|
| path | Lokaler Dateipfad ab public |
| purpose | Einsatzort auf der Website |
| alt | Aussagekräftiger Alternativtext |
| source | Urheber, Kunde, Stockanbieter oder KI-Workflow |
| license | Nutzungsrecht oder Kundenfreigabe |
| approved | Erst nach schriftlicher Freigabe true |

## Regeln

- Keine Kundenbilder oder Logos aus einem anderen Salonprojekt übernehmen.
- KI-Bilder dürfen nur genutzt werden, wenn ihr Nutzungsrecht und ihre Freigabe dokumentiert sind.
- Gesichter nur verwenden, wenn Rechte und gegebenenfalls Model-Releases geklärt sind.
- Marken dürfen nur erscheinen, wenn der Salon deren Nennung bestätigt hat.
- Die Starter-Platzhalter bleiben approved: false und blockieren absichtlich den Handover-Check.

## Aktueller Kundenentwurf – Stand 20.08.2026

Die maschinenlesbare Liste in `config/asset-manifest.json` ist maßgeblich. Alle hier aufgeführten Bildflächen sind generisch, KI-generiert oder originale Vektorarbeit; sie zeigen keine echte Salonarbeit und keine identifizierbaren Personen.

| Asset | Quelle | Lizenz/Nutzung | Alt-Text | Freigabestatus |
| --- | --- | --- | --- | --- |
| `/images/konkurrenz-mark.svg` | Originales Vektorzeichen im Kundenrepository | Projektinternes Originalasset | Abstraktes K-Zeichen für Konkurrenz Hairdesign | zur Freigabe |
| `/favicon.svg` | Originales Vektorzeichen im Kundenrepository | Projektinternes Originalasset | Abstraktes K-Zeichen als Favicon für Konkurrenz Hairdesign | zur Freigabe |
| `/images/konkurrenz-hair-hero.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als illustrative Bildwelt, keine echte Salonarbeit | Illustrative KI-generierte dunkle Haarstruktur mit rotem Studiolicht | zur Freigabe |
| `/images/konkurrenz-hair-texture.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als illustrative Bildwelt, keine echte Salonarbeit | Illustrative KI-generierte kurze dunkle Haarstruktur mit rotem Licht | zur Freigabe |
| `/images/konkurrenz-hair-flow.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als illustrative Bildwelt, keine echte Salonarbeit | Illustrative KI-generierte dunkle Haarfasern mit rotem Licht | zur Freigabe |
| `/images/konkurrenz-hair-wave.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als illustrative Bildwelt, keine echte Salonarbeit | Illustrative KI-generierte wellige dunkle Haarstruktur mit rotem Licht | zur Freigabe |
