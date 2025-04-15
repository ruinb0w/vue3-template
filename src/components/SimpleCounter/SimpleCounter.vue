<script setup lang="ts">
import { useCount } from "@/hooks/count/count"
const count = useCount();
</script>

<template>
  <div class="simple-counter">
    <div class="count">count: {{ count.count }}</div>
    <van-button @click="count.increase" type="primary">increase</van-button>
  </div>
</template>


<style lang="scss" scoped>
@use "@/assets/styles/card.scss" as card;

.simple-counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include card.card-style;
}
</style>
