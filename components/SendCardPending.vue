<script setup lang="ts">
const { amount, asset } = storeToRefs(useSendStore())
</script>

<template>
  <lukso-card variant="with-header" is-full-width>
    <div slot="header" class="px-6 py-10 flex flex-col">
      <SendCardHeader />
    </div>
    <div slot="content" class="p-8 flex flex-col items-center">
      <div class="heading-inter-17-semi-bold">
        {{
          $formatMessage('send_pending_title', {
            amount: amount || '0',
            symbol: asset?.symbol || '',
          })
        }}
      </div>
      <lukso-icon
        name="progress-indicator"
        size="x-large"
        class="mt-6"
      ></lukso-icon>
    </div>
  </lukso-card>
</template>
