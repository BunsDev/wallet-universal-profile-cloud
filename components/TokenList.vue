<script setup lang="ts">
import { Asset } from '@/models/asset'
import { AssetFilter } from '@/types/assets'

type Props = {
  tokens?: Asset[]
}

defineProps<Props>()

const { assetFilter } = storeToRefs(useAppStore())
</script>

<template>
  <div class="pt-8">
    <h3 class="heading-inter-17-semi-bold pb-4">
      {{ $formatMessage('tokens_title') }}
    </h3>
    <div class="grid gap-6 grid-col grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <TokenListLyxCard v-if="assetFilter === AssetFilter.owned" />
      <TokenListCard
        v-for="(asset, index) in tokens"
        :key="index"
        :asset="asset"
        :has-address="true"
        :is-openable="true"
      />
    </div>
  </div>
</template>
