import salonJson from "../config/salon.json";

export type ImageAsset = {
  src: string;
  alt: string;
  caption: string;
};

export type SeoPage = {
  path: string;
  title: string;
  description: string;
};

export type SalonConfig = {
  template: {
    name: string;
    isStarter: boolean;
    handoverStatus: "draft" | "ready";
  };
  identity: {
    name: string;
    legalName: string;
    owner: string;
    descriptor: string;
    address: [string, string];
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    websiteUrl: string;
    year: string;
    locale: string;
  };
  design: {
    accent: string;
    accentBright: string;
    accentDeep: string;
    logo: string;
    favicon: string;
  };
  navigation: Array<{ label: string; href: string }>;
  map: {
    mode: "click-to-load" | "link-only";
    providerName: string;
    title: string;
    directionsUrl: string;
    embedUrl: string;
    consentLabel: string;
    consentCopy: string;
    routeLabel: string;
  };
  seo: Record<string, SeoPage>;
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    intro: string;
    ctaLabel: string;
    trustLine: string;
    primaryImage: ImageAsset;
    secondaryImage: ImageAsset;
  };
  servicesSection: { kicker: string; title: string; intro: string };
  services: Array<{ label: string; title: string; copy: string }>;
  serviceImages: ImageAsset[];
  historySection: {
    kicker: string;
    title: string;
    intro: string;
    quote: string;
    quoteSource: string;
  };
  history: Array<{ year: string; title: string; copy: string }>;
  hours: [string, string][];
  hoursNote: string;
  salonPage: {
    hero: { eyebrow: string; title: string; intro: string; ctaLabel: string };
    image: ImageAsset;
    intro: { kicker: string; title: string; copy: string; linkLabel: string };
    facts: Array<{ highlight: string; title: string; copy: string }>;
    wideCards: Array<{ kicker: string; title: string; copy: string }>;
    cta: { kicker: string; title: string; copy: string };
  };
  teamPage: {
    hero: { eyebrow: string; title: string; intro: string; ctaLabel: string };
    intro: { kicker: string; title: string; copy: string };
    image: ImageAsset;
    values: [string, string][];
  };
  aboutPage: {
    hero: { eyebrow: string; title: string; intro: string; ctaLabel: string };
    story: { kicker: string; title: string; paragraphs: string[] };
    image: ImageAsset;
    cta: { kicker: string; title: string; copy: string };
  };
  bookingPage: {
    hero: { eyebrow: string; title: string; intro: string; ctaLabel: string };
    servicesTitle: string;
    servicesIntro: string;
  };
  footer: { kicker: string; title: string; ctaLabel: string; copy: string };
  legal: {
    taxId: string;
    chamber: string;
    professionalTitle: string;
    disputeResolution: string;
    privacyContactCopy: string;
    privacyHostingCopy: string;
    privacyMapsCopy: string;
  };
  handover: {
    claimsConfirmed: boolean;
    legalReviewed: boolean;
    mapsDecisionConfirmed: boolean;
    ownershipConfirmed: boolean;
  };
};

export const salon = salonJson as unknown as SalonConfig;

export const site = {
  name: salon.identity.name,
  descriptor: salon.identity.descriptor,
  address: salon.identity.address,
  phoneDisplay: salon.identity.phoneDisplay,
  phoneHref: salon.identity.phoneHref,
  email: salon.identity.email,
  websiteUrl: salon.identity.websiteUrl,
  year: salon.identity.year,
  directionsUrl: salon.map.directionsUrl,
} as const;

export const navigation = salon.navigation;
export const services = salon.services;
export const hours = salon.hours;
export const hoursNote = salon.hoursNote;
export const history = salon.history;
