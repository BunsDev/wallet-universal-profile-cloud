<script setup lang="ts">
import { Asset } from '@/models/asset'

type Props = {
  nfts?: Asset[]
}

defineProps<Props>()
</script>

<template>
  <div class="pt-8">
    <h3 class="heading-inter-17-semi-bold pb-4">
      {{ $formatMessage('collectibles_title') }}
    </h3>
    <div class="grid gap-6 grid-col grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <NftListCard
        v-for="(asset, index) in nfts"
        :key="index"
        :asset="asset"
        :has-address="true"
      />
    </div>
  </div>
</template>
