import { INTERFACE_IDS, ImageMetadata } from '@lukso/lsp-smart-contracts'

export type InterfaceId = keyof typeof INTERFACE_IDS

export const tokenStandards: InterfaceId[] = ['LSP7DigitalAsset']
export const nftStandards: InterfaceId[] = ['LSP8IdentifiableDigitalAsset']

export const StandardsAbbreviations: { [K in InterfaceId]?: string } = {
  LSP7DigitalAsset: 'LSP7',
  ERC20: 'ERC20',
  LSP8IdentifiableDigitalAsset: 'LSP8',
}

export enum AssetFilter {
  owned = 'owned',
  created = 'created',
}

export enum Lsp8TokenIdType {
  address = '1',
  number = '2',
  bytes32 = '3',
}

export type Base64EncodedImage = `data:image/jpeg;base64${string}`

export type ImageMetadataEncoded = Partial<ImageMetadata> & {
  base64?: Base64EncodedImage
  profileId?: Address
  assetId?: Address
}
