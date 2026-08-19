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

