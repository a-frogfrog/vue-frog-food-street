<script setup lang="ts">
import { Page, Content, TabBar, ToolBar } from '@frog/common-ui';
import { ToolBarPopup } from '#/components';
import { useTabBar } from './hooks/use-tabbar';
import { useToolBar } from './hooks/use-toolbar';

const { activeName, item, handleClick, isTabBar } = useTabBar();
const { isShow, title, handleToolBarClick } = useToolBar();
</script>

<template>
  <Page>
    <template #popup>
      <ToolBarPopup v-model:show="isShow" />
    </template>
    <template
      v-if="isTabBar"
      #toolbar
    >
      <ToolBar
        :title="title"
        @tool-bar-click="handleToolBarClick"
      />
    </template>
    <template
      v-if="isTabBar"
      #tabbar
    >
      <KeepAlive>
        <TabBar
          v-model:active="activeName"
          :items="item.items"
          @tab-bar-item-click="handleClick"
        />
      </KeepAlive>
    </template>
    <template #content>
      <Content />
    </template>
  </Page>
</template>
