<script setup lang="ts">
import {
  LayoutAside,
  LayoutContent,
  LayoutHeader,
  LayoutMain,
  LayoutLogo,
  LayoutMenu,
} from './modules';

import { useCollapse } from '@frog/hooks';
import { TransitionLoading } from '@frog/common-ui';
import { useMenuData } from './menu';

const { isCollapsed } = useCollapse();
const { menuData } = useMenuData();
</script>

<template>
  <div class="layout h-screen flex">
    <TransitionLoading />
    <LayoutAside
      :is-collapsed="isCollapsed"
      :el-width="isCollapsed ? '80px' : '240px'"
    >
      <template #logo>
        <LayoutLogo />
      </template>
      <template #menu>
        <LayoutMenu :menus="menuData" />
      </template>
    </LayoutAside>
    <LayoutContent class="layout-content flex-1 h-full">
      <template #header>
        <LayoutHeader
          :is-sticky="true"
          height="60px"
          style="padding: 0 20px; background-color: var(--bg-primary)"
        />
      </template>
      <template #main>
        <LayoutMain
          height="calc(100% - 60px)"
          style="padding: 1rem"
        />
      </template>
    </LayoutContent>
  </div>
</template>

<style scoped></style>
