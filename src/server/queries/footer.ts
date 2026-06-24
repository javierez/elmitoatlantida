
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "Inversiones Inmobiliarias el Mito de la Atlántida SL",
  "description": "Tu inmobiliaria de confianza en Santa Cruz de Tenerife. Compraventa, alquiler y valoración en toda la isla.",
  "socialLinks": {

},
  "officeLocations": [{
  "name": "Oficina Santa Cruz de Tenerife",
  "address": ["Rambla de Santa Cruz, 100, Local 3", "Santa Cruz de Tenerife, Santa Cruz de Tenerife"],
  "phone": "+34 622564657",
  "email": "echinea@inversionesinmobiliariaselmito.com"
}],
  "copyright": "© 2026 Inmobiliaria El Mito de la Atlántida. Todos los derechos reservados."
};
}
