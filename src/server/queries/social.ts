

export type SocialLink = {
  platform: "facebook" | "twitter" | "instagram" | "linkedin" | "youtube";
  url: string;
};

export const getSocialLinks = (_accountIdArg?: bigint): SocialLink[] => {
  return [];
}