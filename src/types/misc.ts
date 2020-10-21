export enum FontAssetType {
  EOT = 'eot',
  WOFF2 = 'woff2',
  WOFF = 'woff',
  TTF = 'ttf',
  SVG = 'svg'
}

export enum OtherAssetType {
  CSS = 'css'
}

export const ASSET_TYPES = {
  ...FontAssetType,
  ...OtherAssetType
};

export type AssetType = FontAssetType | OtherAssetType;
