import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountId?: bigint): string[] => {
  return ["Santa Cruz de Tenerife"];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "Tu inmobiliaria de confianza en Santa Cruz de Tenerife",
  "subtitle": "Asesoramiento inmobiliario cercano y profesional en Santa Cruz de Tenerife: compraventa, alquiler y valoración de inmuebles en toda la isla.",
  "backgroundImage": "https://inmobiliariaacropolis.s3.us-east-1.amazonaws.com/accounts/142/hero/background_-EvWfOX4.jpg",
  "backgroundVideo": "https://inmobiliariaacropolis.s3.us-east-1.amazonaws.com/accounts/142/hero/background_pmjZ_0aJ.mp4",
  "backgroundType": "video",
  "findPropertyButton": "Explorar Propiedades",
  "contactButton": "Contáctanos"
};
}
