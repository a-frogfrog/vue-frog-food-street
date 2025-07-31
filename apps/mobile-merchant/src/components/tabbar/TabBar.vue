<script setup lang="ts">
import { Icon, HomeIcon } from '@frog/icons';
import { useTheme } from '@frog/hooks';

const { toggleTheme } = useTheme();
toggleTheme();
</script>

<template>
  <div
    class="backdrop-blur-sm dark:backdrop-brightness-50 dark:text-white !px-2 !pt-2 flex justify-around items-center"
  >
    <div class="flex flex-col items-center">
      <Icon :size="24">
        <HomeIcon />
      </Icon>
      <span>home</span>
    </div>
    <div class="flex flex-col items-center">
      <Icon :size="24">
        <HomeIcon />
      </Icon>
      <span>home</span>
    </div>
  </div>
</template>
