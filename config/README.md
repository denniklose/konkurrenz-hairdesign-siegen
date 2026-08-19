# Konfiguration

Bearbeite für jeden Kunden zuerst salon.json und asset-manifest.json.

- salon.json ist die einzige Quelle für sichtbare Kundendaten, Texte, Farben, SEO und Kartenmodus.
- asset-manifest.json dokumentiert Rechte und Freigaben.
- Erst nach vollständiger Kundenfreigabe template.isStarter auf false und template.handoverStatus auf ready setzen.
- Danach muss npm run check:handover ohne Fehler durchlaufen.
