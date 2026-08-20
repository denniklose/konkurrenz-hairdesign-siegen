# Friseursalon Starter

Private Next.js-Vorlage für deutsche Friseursalons. Das Dark-Bento-Design, die Helvetica-Typografie, der Aufbau der Seiten und die Kontaktlogik bleiben wiedererkennbar. Pro Kunde wechselst du ausschließlich Konfiguration, Bilder, Logo, Akzentfarbe und bestätigte Inhalte.

## Nur ein Befehl für einen neuen Salon

Für einen neuen Kunden musst du nicht erst manuell ein Repository kopieren oder einen langen Auftrag schreiben. Kopiere einfach den fertigen [Ein-Befehl-Workflow](./NEUER_SALON_BEFEHL.md) in einen neuen Codex-Chat und ersetze Salonname, Ort sowie optional einen Quellenlink. Codex legt dann ein separates Kunden-Repository und — erst nach erfolgreicher Übergabeprüfung — ein neues Vercel-Projekt an.

## Neuer Salon in fünf Schritten

1. Erstelle aus diesem privaten Repository ein neues Kunden-Repository.
2. Fülle SALON_INTAKE.md mit öffentlich recherchierten und vom Salon bestätigten Fakten.
3. Ersetze config/salon.json, Bilder unter public/images und config/asset-manifest.json.
4. Führe npm ci, npm run check:template, npm run lint, npx tsc --noEmit und npm run build aus.
5. Erst wenn npm run check:handover erfolgreich ist, ein neues Vercel-Projekt für diesen Kunden erstellen und deployen.

## Wichtigste Dateien

| Datei | Zweck |
|---|---|
| config/salon.json | Zentraler Inhalt, Design, SEO, Kartenmodus und Legal-Felder |
| config/asset-manifest.json | Quelle, Lizenz, Alttext und Kundenfreigabe aller Bilder/Logos |
| SALON_INTAKE.md | Kundendaten und offene Fakten |
| CODEX_PROMPT.md | Standardauftrag für Codex beim Erstellen eines Kundenprojekts |
| HANDOVER_CHECKLIST.md | Technische, inhaltliche, rechtliche und Eigentumsfreigabe |
| app/components | Wiederverwendbare Designbausteine |

## Kartenstandard

Google Maps wird standardmäßig erst nach einem bewussten Klick geladen. Adresse und Routenlink sind sofort sichtbar. Wenn ein Kunde keine eingebettete Karte möchte, setze map.mode auf link-only.

## Sicherheit vor Übergabe

Die Vorlage ist absichtlich mit neutralen Platzhaltern markiert. npm run check:handover schlägt fehl, bis reale Kundendaten, Rechtefreigaben und Handover-Bestätigungen eingetragen sind. Das verhindert, dass eine Musterseite versehentlich als Kundenwebsite veröffentlicht wird.

## Nicht direkt deployen

Dieses Repository ist ein Starter, keine fertige Salon-Website. Jede Kundenwebsite erhält ein neues Repository, ein neues Vercel-Projekt und eine eigene Domain oder Vercel-URL.
