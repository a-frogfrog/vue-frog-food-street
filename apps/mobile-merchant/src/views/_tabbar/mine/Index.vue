<script setup lang="ts">
import Profile from './modules/Profile.vue';
import MineCard from './modules/MineCard.vue';
import ActionSheet from './modules/ActionSheet.vue';
import PromptCard from './modules/PromptCard.vue';
</script>
<template>
  <div class="h-full">
    <div class="bg-linear-to-b !px-4 !py-5 from-[#E8ECFC] to-[#F9F2F7]">
      <Profile />
      <MineCard />
      <PromptCard />
    </div>
    <ActionSheet class="!px-6" />
  </div>
</template>
