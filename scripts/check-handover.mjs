import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const templateMode = process.argv.includes("--template");
const salonPath = join(root, "config", "salon.json");
const assetsPath = join(root, "config", "asset-manifest.json");
const errors = [];
const warnings = [];

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push("Ungültige JSON-Datei: " + relative(root, path) + " (" + error.message + ")");
    return null;
  }
}

function isPlaceholder(value) {
  return !value || /BITTE|example\.invalid|Musterstadt|Musterstraße/i.test(value);
}

function addMissing(label, value) {
  if (isPlaceholder(value)) {
    errors.push(label + " fehlt oder enthält noch einen Platzhalter.");
  }
}

function listTextFiles(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return listTextFiles(path);
    return /\.(ts|tsx|json|mjs)$/i.test(entry.name) ? [path] : [];
  });
}

const salon = readJson(salonPath);
const assetManifest = readJson(assetsPath);

if (!salon || !assetManifest) {
  process.exitCode = 1;
} else if (templateMode) {
  const requiredPaths = [
    "app/site-data.ts",
    "app/components/ConsentMap.tsx",
    "app/robots.ts",
    "app/sitemap.ts",
    "config/salon.json",
    "config/asset-manifest.json",
    "SALON_INTAKE.md",
    "CODEX_PROMPT.md",
    "ASSET_MANIFEST.md",
    "HANDOVER_CHECKLIST.md"
  ];

  for (const path of requiredPaths) {
    if (!existsSync(join(root, path))) {
      errors.push("Vorlagendatei fehlt: " + path);
    }
  }

  for (const asset of assetManifest.assets ?? []) {
    const localPath = join(root, "public", asset.path.replace(/^\//, ""));
    if (!existsSync(localPath)) {
      errors.push("Assetdatei fehlt: " + asset.path);
    }
  }
} else {
  if (salon.template?.isStarter) {
    errors.push("template.isStarter ist noch true. Vor einem Kunden-Handover auf false setzen.");
  }
  if (salon.template?.handoverStatus !== "ready") {
    errors.push("template.handoverStatus muss für die Übergabe auf ready stehen.");
  }

  addMissing("Salonname", salon.identity?.name);
  addMissing("Rechtlicher Betreibername", salon.identity?.legalName);
  addMissing("Verantwortliche Person", salon.identity?.owner);
  addMissing("Adresse", (salon.identity?.address ?? []).join(" "));
  addMissing("Telefon", salon.identity?.phoneDisplay);
  addMissing("E-Mail-Adresse", salon.identity?.email);
  addMissing("Produktions-URL", salon.identity?.websiteUrl);

  if (!["click-to-load", "link-only"].includes(salon.map?.mode)) {
    errors.push("maps.mode muss click-to-load oder link-only sein.");
  }
  if (!salon.handover?.claimsConfirmed) {
    errors.push("Claims sind noch nicht durch den Kunden bestätigt.");
  }
  if (!salon.handover?.legalReviewed) {
    errors.push("Impressum und Datenschutz sind noch nicht als geprüft markiert.");
  }
  if (!salon.handover?.mapsDecisionConfirmed) {
    errors.push("Die Kartenentscheidung ist noch nicht bestätigt.");
  }
  if (!salon.handover?.ownershipConfirmed) {
    errors.push("GitHub, Vercel, Domain und Billing sind noch nicht als übergeben markiert.");
  }

  for (const asset of assetManifest.assets ?? []) {
    const localPath = join(root, "public", asset.path.replace(/^\//, ""));
    if (!existsSync(localPath)) {
      errors.push("Assetdatei fehlt: " + asset.path);
    }
    if (!asset.source || !asset.license) {
      errors.push("Quellen- oder Lizenzangabe fehlt für " + asset.path);
    }
    if (!asset.approved) {
      errors.push("Asset ist noch nicht freigegeben: " + asset.path);
    }
  }

  const placeholderText = readFileSync(salonPath, "utf8");
  if (/BITTE VOR VERÖFFENTLICHUNG|example\.invalid|Musterstadt|Musterstraße/i.test(placeholderText)) {
    errors.push("Die Salonkonfiguration enthält noch sichtbare Platzhalter.");
  }

  const forbiddenBrands = ["Link-Wirthen", "Chaarisma", "Olaf Wirthen"];
  for (const file of [...listTextFiles(join(root, "app")), ...listTextFiles(join(root, "config"))]) {
    const content = readFileSync(file, "utf8");
    for (const brand of forbiddenBrands) {
      if (content.includes(brand)) {
        errors.push("Alte Kundendaten gefunden: " + brand + " in " + relative(root, file));
      }
    }
  }
}

if (templateMode && salon.template?.isStarter !== true) {
  warnings.push("Die Vorlage ist nicht mehr im Starter-Modus. Für neue Kunden einen frischen Clone verwenden.");
}

if (warnings.length) {
  console.log("Hinweise:");
  for (const warning of warnings) console.log("- " + warning);
}

if (errors.length) {
  console.error("Handover-Check nicht bestanden:");
  for (const error of errors) console.error("- " + error);
  process.exitCode = 1;
} else if (templateMode) {
  console.log("Template-Check bestanden: Struktur und neutrale Platzhalter sind vollständig.");
} else {
  console.log("Handover-Check bestanden: Konfiguration, Rechte-Freigaben und Übergabeangaben sind vollständig.");
}
