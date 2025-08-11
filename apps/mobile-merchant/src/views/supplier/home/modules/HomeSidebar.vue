<script setup lang="ts">
import { Sidebar, SidebarItem } from 'vant';
import { ref } from 'vue';
document.documentElement.style.setProperty(
  '--van-sidebar-selected-border-color',
  '#41B883',
);

document.documentElement.style.setProperty(
  '--van-sidebar-selected-text-color',
  '#41B883',
);

document.documentElement.style.setProperty(
  '--van-sidebar-selected-border-width',
  '2px',
);

document.documentElement.style.setProperty(
  '--van-sidebar-selected-border-height',
  '32px',
);
const sideActive = ref(0);
</script>

<template>
  <div>
    <div class="border-t border-gray-200 !pt-2 max-h-96 overflow-hidden">
      <h1 class="!px-3 text-xl font-semibold font-smiley tracking-widest">
        类别
      </h1>
      <Sidebar v-model="sideActive" class="overflow-auto">
        <SidebarItem title="Item 1" />
        <SidebarItem title="Item 2" />
        <SidebarItem title="Item 3" />
        <SidebarItem title="Item 4" v-for="item in 10" :key="item" />
      </Sidebar>
    </div>
  </div>
</template>
