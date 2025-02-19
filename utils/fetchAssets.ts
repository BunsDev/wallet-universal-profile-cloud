import { AssetRepository } from '@/repositories/asset'

export const fetchAssets = async (profileAddress: Address) => {
  const { profile } = useProfile(profileAddress)
  const assetRepo = useRepo(AssetRepository)
  const { receivedAssetIds, issuedAssetIds } = profile.value || {}
  const { isLoadingAssets } = storeToRefs(useAppStore())

  try {
    isLoadingAssets.value = true

    receivedAssetIds &&
      (await assetRepo.loadAssets(receivedAssetIds, profileAddress))
    issuedAssetIds &&
      (await assetRepo.loadAssets(issuedAssetIds, profileAddress))
  } catch (error) {
    console.error(error)
  } finally {
    isLoadingAssets.value = false
  }
}
