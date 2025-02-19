import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts'
import {
  isAddress,
  /*isAddress,*/ padLeft /*, toChecksumAddress*/,
  toChecksumAddress,
} from 'web3-utils'

import { LSP0ERC725Account } from '@/types/contracts'
import { Profile } from '@/models/profile'
import { Creator } from '@/models/creator'

export const fetchLsp4Creators = async (
  assetAddress: Address,
  tokenId?: string
): Promise<Profile[] | undefined> => {
  const { contract } = useWeb3(PROVIDERS.RPC)

  try {
    const creatorsNumber = Number(
      await contract<LSP0ERC725Account>(getDataABI, assetAddress)
        .methods.getData(ERC725YDataKeys.LSP4['LSP4Creators[]'].length)
        .call()
    )

    if (creatorsNumber === 0) {
      return []
    }

    const creators: Creator[] = []
    for (let i = 1; i <= creatorsNumber; i++) {
      const creatorAddress = await contract<LSP0ERC725Account>(
        getDataABI,
        assetAddress
      )
        .methods.getData(
          ERC725YDataKeys.LSP4['LSP4Creators[]'].index +
            padLeft((i - 1).toString(), 32)
        )
        .call()

      assertAddress(creatorAddress)
      let profile: Profile = {
        address: toChecksumAddress(creatorAddress) as Address,
      }

      try {
        profile = {
          ...(await fetchLsp3Profile(creatorAddress)),
          ...profile,
        }
      } catch (error) {
        console.warn(`Failed to fetch creator ${creatorAddress}`)
      }
      const issuedAssets =
        (profile?.issuedAssetIds &&
          profile.issuedAssetIds.filter(address => {
            if (isAddress(address)) {
              return toChecksumAddress(address)
            }
          })) ||
        []
      const isVerified = issuedAssets.includes(assetAddress)

      creators.push({
        profileId: toChecksumAddress(creatorAddress) as Address,
        profile,
        assetId: assetAddress,
        tokenId,
        isVerified,
      })
    }

    return creators
  } catch (error) {
    console.error(error)
  }
}
