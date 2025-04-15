<script setup lang="ts">
import SimpleCounter from '@/components/SimpleCounter/SimpleCounter.vue';
import AppVersion from '@/components/AppVersion/AppVersion.vue';
import UserInfo from '@/components/UserInfo/UserInfo.vue';
</script>

<template>
  <div class="about-page" offset="1" span="22">
    <app-version />
    <user-info />
    <simple-counter />
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  text-align: center;

  .count {
    margin-top: 20px;
  }
}
</style>
