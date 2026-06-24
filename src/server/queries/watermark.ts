

export interface WatermarkConfig {
  enabled: boolean;
  position: string;
  sizePercentage: number;
  opacity: number;
  logoUrl: string;
}

export const getWatermarkConfig = (_accountIdArg?: bigint): WatermarkConfig => {
  return {
  "enabled": true,
  "position": "center",
  "sizePercentage": 40,
  "opacity": 0.8,
  "logoUrl": "https://inmobiliariaacropolis.s3.us-east-1.amazonaws.com/accounts/142/branding/logo_transparent_eqRGA0HU.png"
};
}