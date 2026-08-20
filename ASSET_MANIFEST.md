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

Die maschinenlesbare Liste in `config/asset-manifest.json` ist maßgeblich. Alle hier aufgeführten Bildflächen sind generisch, KI-generiert oder originale Vektorarbeit; sie zeigen keine echte Salonarbeit und keine realen, identifizierbaren Personen.

| Asset | Quelle | Lizenz/Nutzung | Alt-Text | Freigabestatus |
| --- | --- | --- | --- | --- |
| `/images/konkurrenz-mark.svg` | Originales Vektorzeichen im Kundenrepository | Projektinternes Originalasset, transparentes Monogramm ohne Rahmen | Fließendes K-Monogramm für Konkurrenz Hairdesign | zur Freigabe |
| `/favicon.svg` | Originales Vektorzeichen im Kundenrepository | Projektinternes Originalasset, transparentes Monogramm ohne Rahmen | Fließendes K-Monogramm als Favicon für Konkurrenz Hairdesign | zur Freigabe |
| `/images/konkurrenz-hair-woman.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Früheres Bild, nicht mehr auf der Startseite aktiv; keine echte Salonarbeit | KI-generiertes Portrait einer Frau mit mittellangem, weich gestuftem Haarschnitt | zur Freigabe |
| `/images/konkurrenz-hair-woman-back.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als generische Salonbildwelt, keine echte Salonarbeit; Rückansicht ohne Gesicht | KI-generierte Rückansicht einer Frau mit mittellangem, weich gestuftem Haarschnitt | zur Freigabe |
| `/images/konkurrenz-hair-man.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als generische Salonbildwelt, keine echte Salonarbeit | KI-generiertes Portrait eines Mannes mit strukturiertem Kurzhaarschnitt | zur Freigabe |
| `/images/konkurrenz-hair-style-waves.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als generische Salonbildwelt, keine echte Salonarbeit; Rückansicht ohne Gesicht | KI-generierte Rückansicht eines schulterlangen Haarschnitts mit weichen, hellen Wellen | zur Freigabe |
| `/images/konkurrenz-hair-style-bob.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als generische Salonbildwelt, keine echte Salonarbeit; Rückansicht ohne Gesicht | KI-generierte Rückansicht eines präzisen dunklen Bobs mit klarer Kante | zur Freigabe |
| `/images/konkurrenz-hair-style-textured.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als generische Salonbildwelt, keine echte Salonarbeit; Rückansicht ohne Gesicht | KI-generierte Rückansicht eines texturierten Kurzhaarschnitts mit sauberem Nacken | zur Freigabe |
| `/images/konkurrenz-hair-hero.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als illustrative Bildwelt, keine echte Salonarbeit | Illustrative KI-generierte dunkle Haarstruktur mit rotem Studiolicht | zur Freigabe |
| `/images/konkurrenz-hair-texture.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als illustrative Bildwelt, keine echte Salonarbeit | Illustrative KI-generierte kurze dunkle Haarstruktur mit rotem Licht | zur Freigabe |
| `/images/konkurrenz-hair-flow.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als illustrative Bildwelt, keine echte Salonarbeit | Illustrative KI-generierte dunkle Haarfasern mit rotem Licht | zur Freigabe |
| `/images/konkurrenz-hair-wave.png` | Original KI-generiert mit OpenAI Image Generation am 20.08.2026 | Nur als illustrative Bildwelt, keine echte Salonarbeit | Illustrative KI-generierte wellige dunkle Haarstruktur mit rotem Licht | zur Freigabe |
