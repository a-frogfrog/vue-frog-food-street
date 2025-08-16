<script setup lang="ts">
/**
 * @description 基础布局组件
 */

import { Page } from '#/components';
import { useTabBar, useTopNavigation } from './data';
import { TabBar, TopNavigationBar, TopNavigationBarItems } from '#/components';

const { tabBarPage, items, active, handleChange } = useTabBar();
const { topBarPage, handleBarClick, handleCartClick, handleSettingClick } =
  useTopNavigation();
</script>

<template>
  <Page :isTabBar="tabBarPage" :isTopBar="topBarPage">
    <template #topNavigation>
      <TopNavigationBar>
        <template #items>
          <TopNavigationBarItems
            @barClick="handleBarClick"
            @cartClick="handleCartClick"
            @settingClick="handleSettingClick"
          />
        </template>
      </TopNavigationBar>
    </template>
    <template #main>
      <RouterView v-slot="{ Component }">
        <Transition name="slide-fade" mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </template>
    <template #tabBar>
      <TabBar
        :active="active"
        :activeColor="'#e9e9e9'"
        :items="items"
        @change="handleChange"
      />
    </template>
  </Page>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
