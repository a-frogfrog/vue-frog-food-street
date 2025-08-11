<script setup lang="ts">
import { Icon, HomeIcon, MoreIcon } from '@frog/icons';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="flex relative justify-between !p-2 items-center">
    <div class="flex gap-2 items-center">
      <div @click="goBack">
        <Icon :size="20">
          <MoreIcon class="rotate-180" />
        </Icon>
      </div>
      <div>
        <input
          type="text"
          class="bg-amber-50 !rounded-full outline-0"
          placeholder="Search..."
        />
      </div>
    </div>
    <div>
      <Icon :size="20">
        <HomeIcon />
      </Icon>
    </div>
  </div>
</template>
