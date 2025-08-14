<script setup lang="ts">
import { Icon, Mine } from '@frog/icons';
</script>
<template>
  <article
    class="!my-5 flex justify-between !px-6 bg-white rounded-xl shadow-lg !py-2"
  >
    <div v-for="item in 3" :key="item" class="flex items-center flex-col">
      <Icon :size="28">
        <Mine />
      </Icon>
      <strong class="!py-1">5</strong>
      <p class="text-gray-500">My Rewards</p>
    </div>
  </article>
</template>
