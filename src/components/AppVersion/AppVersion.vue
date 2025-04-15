<script setup lang="ts">
import { useConfigStore } from '@/store/configStore/configStore';
import { onMounted } from 'vue';

const configStore = useConfigStore();

onMounted(async () => {
  configStore.getConfig();
})
</script>

<template>
  <div class="app-version">
    <van-button v-for="(val, key) in configStore.config" :key="key">
      {{ key }} - {{ val }}
    </van-button>
  </div>
</template>


<style lang="scss" scoped>
@use "@/assets/styles/card.scss" as card;

.app-version {
  display: flex;
  flex-direction: column;
  @include card.card-style;
}
</style>
