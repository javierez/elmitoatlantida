
import {
  type CardDisplayConfig,
  DEFAULT_CARD_DISPLAY,
  resolveCardDisplay,
} from "~/lib/card-display";

// Module-level default for queries that haven't (yet) been refactored to
// accept an explicit accountId. Falls back to the build-time env var.

export type LinkItem = {
  title: string;
  url: string;
};

export type LinkCategory = {
  name: string;
  links: LinkItem[];
};

export const getLinksProps = (_accountIdArg?: bigint): LinkCategory[] => {
  return [];
}

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  questions: FaqItem[];
};

export const getFaqsProps = (_accountIdArg?: bigint): FaqCategory[] => {
  return [];
}

export type PropertiesConfig = {
  title: string;
  subtitle: string;
  buttonText: string;
  itemsPerPage?: number;
  defaultSort?: string;
  showDescription: boolean;
  showReference?: boolean;
  cardDisplay: CardDisplayConfig;
};

const PROPERTIES_DEFAULTS = {
  title: "Propiedades Destacadas",
  subtitle: "Descubre nuestra selección de propiedades disponibles",
  buttonText: "Ver Todas las Propiedades",
  showDescription: true,
  showReference: true,
  cardDisplay: DEFAULT_CARD_DISPLAY,
} satisfies PropertiesConfig;

export const getPropertiesConfig = (_accountIdArg?: bigint): PropertiesConfig => {
  return {
  "cardDisplay": {
  "cardTitle": "listing",
  "cardEyebrow": "location",
  "cardLocationField": "province"
},
  "title": "Propiedades Destacadas",
  "subtitle": "Descubre nuestra selección de propiedades disponibles",
  "buttonText": "Ver Todas las Propiedades",
  "showDescription": true
};
}

export type SEOConfig = {
  title: string;
  description: string;
  name?: string;
  image?: string;
  url?: string;
  telephone?: string;
  email?: string;
  keywords?: string[] | string; // Support both array and string formats
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  /** Per-account Google Analytics 4 measurement ID (e.g. "G-XXXXXXXXXX"). */
  gaMeasurementId?: string;
};

/**
 * Per-account website feature flags + light config. Stored as a JSON string in
 * `website_config.features_props`. Every field is optional; when undefined the
 * caller falls back to the historical default, so a null column = today's behavior.
 *
 * NOTE (v1 template): some fields have no visible effect on this older template
 * because it doesn't render those surfaces (e.g. the navbar already uses direct
 * links rather than mega-menus, and the hero has its own layout). Such fields are
 * still parsed so the shape stays in sync with v2 and the admin. The fields that
 * apply on v1: `pages.promociones`, `menuLabels.vender`, `menuLabels.contacto`,
 * `logoSize`, `referenceSearch`, `footerCards`, `serviciosCta`, `headerStyle`,
 * `descriptionAlign`.
 */
export type FeaturesProps = {
  pages?: {
    promociones?: boolean;
    servicios?: boolean;
    nosotros?: boolean;
  };
  sections?: {
    socialFamily?: boolean;
  };
  menuLabels?: {
    segundaMano?: string;
    alquilar?: string;
    inversion?: string;
    inversionSubtitle?: string;
    inversionHref?: string;
    vender?: string;
    /** Label for the contact CTA / titles (e.g. "Contacto"). Default "Contáctanos". */
    contacto?: string;
  };
  logoSize?: "standard" | "large" | "xlarge";
  /** Hero section height: "standard" (~88vh) or "full" (fills the screen). */
  heroSize?: "standard" | "full";
  /** Hero shows direct Venta/Alquiler access buttons instead of the search bar. */
  heroDirectAccess?: boolean;
  /** Navbar Venta/Alquiler are direct links (no property-type mega-menu). */
  navDirectLinks?: boolean;
  /** Show the "Buscar por referencia" search in the navbar. Default true. */
  referenceSearch?: boolean;
  /** Show the bottom call-to-action on the /servicios page. Default true. */
  serviciosCta?: boolean;
  /** Contact CTA shows only the button (no heading/blurb). Default false. */
  contactCtaMinimal?: boolean;
  /** When true, footer navigation renders as cards and the property-types column is hidden. */
  footerCards?: boolean;
  /**
   * "minimal" hides the small uppercase kicker above section titles and the
   * subtitle below them, site-wide, for a cleaner look. Defaults to "standard".
   */
  headerStyle?: "standard" | "minimal";
  /**
   * Text alignment for description/paragraph blocks. Unset → keep each block's
   * existing alignment; "justify"/"center" override it site-wide.
   */
  descriptionAlign?: "justify" | "center";
};

/** Read the legacy `metadata.modules.promotions` flag (older accounts gated /promociones here). */
function readLegacyPromotions(metadata: string | null | undefined): boolean | undefined {
  if (!metadata) return undefined;
  try {
    const raw =
      typeof metadata === "string" ? (JSON.parse(metadata) as unknown) : metadata;
    const modules =
      raw && typeof raw === "object" && "modules" in raw
        ? (raw as { modules?: { promotions?: unknown } }).modules
        : undefined;
    return modules?.promotions === true ? true : undefined;
  } catch {
    return undefined;
  }
}

export const getFeaturesProps = (): FeaturesProps => {
  return {

};
}

export type ModulesConfig = {
  promotionsEnabled: boolean;
};

// Thin wrapper kept for existing callers; promotions now lives in features_props
// (with legacy metadata.modules.promotions folded in by getFeaturesProps).
export const getModulesConfig = (): ModulesConfig => {
  return {
  "promotionsEnabled": false
};
}

export const getSEOConfig = (): SEOConfig => {
  return {
  "title": "Inmobiliaria El Mito de la Atlántida | Inmobiliaria en Santa Cruz de Tenerife",
  "description": "Compra, vende o alquila en Tenerife con Inmobiliaria El Mito de la Atlántida. Asesoramiento cercano, valoraciones y gestión integral en Santa Cruz.",
  "keywords": "Compraventa de viviendas, Alquiler residencial, Valoración de inmuebles, Inversión inmobiliaria, Santa Cruz de Tenerife, San Cristóbal de La Laguna, El Rosario, Tegueste, Tenerife",
  "name": "Inmobiliaria El Mito de la Atlántida",
  "email": "echinea@inversionesinmobiliariaselmito.com",
  "telephone": "+34 622564657",
  "url": "https://www.inversionesinmobiliariaselmito.com",
  "ogTitle": "Inmobiliaria El Mito de la Atlántida",
  "ogDescription": "Compra, vende o alquila en Tenerife con Inmobiliaria El Mito de la Atlántida. Asesoramiento cercano, valoraciones y gestión integral en Santa Cruz.",
  "ogType": "website",
  "ogLocale": "es_ES",
  "ogSiteName": "Inmobiliaria El Mito de la Atlántida"
};
}
