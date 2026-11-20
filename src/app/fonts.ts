import { GeistSans } from "geist/font/sans";
import {
  Cormorant_Garamond,
  Poppins,
} from "next/font/google";
import type { FontFamilyKey } from "~/lib/data";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], display: "swap", variable: "--font-cormorant", weight: ["300", "400", "500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], display: "swap", variable: "--font-poppins", weight: ["300", "400", "500", "600", "700"] });

type FontEntry = { loader: { variable: string; className: string }; cssVar: string };

export const fontCatalog: Partial<Record<FontFamilyKey, FontEntry>> = {
  geist: { loader: GeistSans, cssVar: "var(--font-geist-sans)" },
  cormorant: { loader: cormorant, cssVar: "var(--font-cormorant)" },
  poppins: { loader: poppins, cssVar: "var(--font-poppins)" },
};

export const builtFonts: { sansFamily: FontFamilyKey; headingFamily: FontFamilyKey } = {
  sansFamily: "poppins",
  headingFamily: "poppins",
};

export const allFontVariables = Object.values(fontCatalog)
  .filter((entry): entry is FontEntry => Boolean(entry))
  .map((entry) => entry.loader.variable)
  .join(" ");
