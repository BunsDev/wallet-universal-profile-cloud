import LSP3ProfileMetadata from '@erc725/erc725.js/schemas/LSP3ProfileMetadata.json'
import { ERC725JSONSchema } from '@erc725/erc725.js'

import { Profile } from '@/models/profile'

export const fetchLsp3Profile = async (
  profileAddress: Address
): Promise<Profile> => {
  const { getInstance } = useErc725()
  const erc725 = getInstance(
    profileAddress,
    LSP3ProfileMetadata as ERC725JSONSchema[]
  )
  const profileData = await erc725.fetchData([
    'LSP3Profile',
    'LSP5ReceivedAssets[]',
    'LSP12IssuedAssets[]',
  ])
  const [profileMetadata, receivedAssets, issuedAssets] = profileData
  const lsp3Profile = validateLsp3Metadata(profileMetadata)
  const profileImage =
    lsp3Profile.profileImage &&
    (await getAndConvertImage(lsp3Profile.profileImage, 96))
  const backgroundImage =
    lsp3Profile.backgroundImage &&
    (await getAndConvertImage(lsp3Profile.backgroundImage, 240))

  const { getBalance } = useWeb3(PROVIDERS.RPC)
  const balance = await getBalance(profileAddress)
  const profileImageId = getImageId(profileImage)
  const backgroundImageId = getImageId(backgroundImage)

  return {
    ...lsp3Profile,
    address: profileAddress,
    balance,
    metadata: lsp3Profile,
    profileImage,
    backgroundImage,
    profileImageId,
    backgroundImageId,
    receivedAssetIds: receivedAssets.value as Address[],
    issuedAssetIds: issuedAssets.value as Address[],
  }
}
