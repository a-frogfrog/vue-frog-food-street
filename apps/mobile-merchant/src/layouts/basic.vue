<script setup lang="ts">
/**
 * @description 基础布局组件
 */

import { Page } from '@frog/common-ui';
import { useTabBar } from './data';
import {
  TabBar,
  SideNavigation,
  ShoppingCart,
  useSideNavigation,
} from '#/components';

const { tabBarPage, items } = useTabBar();
const { isShow } = useSideNavigation();
</script>

<template>
  <Page>
    <template #tabBar v-if="tabBarPage">
      <TabBar :items="items"> </TabBar>
    </template>
    <template #sideNavigation>
      <SideNavigation :show="isShow" />
    </template>
    <template #shoppingCart>
      <ShoppingCart />
    </template>
  </Page>
</template>
