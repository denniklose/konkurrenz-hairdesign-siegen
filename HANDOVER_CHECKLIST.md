# Handover Checklist

## Aktueller Status – 20.08.2026

**Keine Kundenübergabe und kein Vercel-Deploy:** Die Pflichtdaten für Betreiber, E-Mail, Rechtsdaten, Öffnungszeiten, Leistungen, finale Assetfreigabe sowie Domain/Vercel/Billing liegen noch nicht vor. Die Website ist deshalb ein nicht öffentlicher Kundenentwurf mit `handoverStatus: draft`.

## Inhalt und Marke

- [ ] Salonname, Adresse, Telefon, E-Mail und Öffnungszeiten vom Kunden bestätigt
- [ ] Leistungen, Team, Geschichte und Marken nur mit belegten Fakten veröffentlicht
- [ ] Keine alten Kundennamen oder Beispieltexte im Code oder in der Konfiguration
- [ ] Logo, Akzentfarbe, Bildauswahl und Social Links freigegeben

## Assets und Recht

- [ ] Jedes aktive Asset ist in config/asset-manifest.json dokumentiert
- [ ] Quelle, Lizenz und Kundenfreigabe je Asset vorhanden
- [ ] Impressum vollständig und fachlich geprüft
- [ ] Datenschutz entspricht Hosting, Karte und weiteren tatsächlichen Datenflüssen
- [ ] Kartenmodus ist bestätigt und die Karte lädt nicht vor Nutzeraktion

## Technik und Betrieb

- [ ] npm run check:handover erfolgreich
- [ ] npm run lint erfolgreich
- [ ] npx tsc --noEmit erfolgreich
- [ ] npm run build erfolgreich
- [ ] Desktop und Mobil geprüft; keine Console-Fehler oder horizontaler Overflow
- [ ] Title, Description, Canonical, robots.txt und sitemap.xml je Route geprüft
- [ ] Neues GitHub-Repository, neues Vercel-Projekt und neue Kunden-URL verwendet
- [ ] Domain, Vercel, GitHub und Billing-Zugänge dokumentiert oder übergeben
