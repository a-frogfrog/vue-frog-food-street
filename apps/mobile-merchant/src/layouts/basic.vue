<script setup lang="ts">
/**
 * @description 基础布局组件
 */

import { Page } from '#/components';
import { useTabBar, useTopNavigation } from './data';
import {
  TabBar,
  ShoppingCart,
  TopNavigationBar,
  TopNavigationBarItems,
} from '#/components';

const { tabBarPage, items, active, handleChange } = useTabBar();
const { topBarPage, handleBarClick, handleCartClick, handleSettingClick } =
  useTopNavigation();
</script>

<template>
  <Page>
    <template #topNavigation v-if="topBarPage">
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
    <template #tabBar v-if="tabBarPage">
      <TabBar :active="active" :items="items" @change="handleChange" />
    </template>
    <template #shoppingCart>
      <ShoppingCart />
    </template>
  </Page>
</template>
