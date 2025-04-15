<script setup lang="ts">
import { useUserStore } from '@/store/userStore/userStore';
const userStore = useUserStore();

function handleRefreshPage() {
  location.reload();
}
</script>

<template>
  <div class="user-info">
    <van-field v-model="userStore.userInfo.name" label="name" placeholder="Text" />
    <van-field v-model="userStore.userInfo.age" label="age" placeholder="Text" />
    <div class="operations">
      <van-button type="primary" @click="userStore.cleanInfo">clean user info</van-button>
      <van-button type="success" @click="handleRefreshPage">refresh page</van-button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use "@/assets/styles/card.scss" as card;

.user-info {
  @include card.card-style;

  .operations {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>
