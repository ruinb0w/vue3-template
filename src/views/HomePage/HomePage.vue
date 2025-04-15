<script setup lang="ts">
import UserInfo from "@/components/UserInfo/UserInfo.vue"
import SimpleCounter from "@/components/SimpleCounter/SimpleCounter.vue";
import { formatDate } from "@/libs/formatter";
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
  <div class="home-page" offset="1" span="22">
    <div class="flex">
      <van-button class="center">open at: {{ formatDate(new Date(), 'hh:mm') }}</van-button>
      <van-button class="center" type="success" @click="router.push('/about')">go About</van-button>
    </div>
    <user-info />
    <simple-counter />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  .flex {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
