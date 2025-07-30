<script setup lang="ts">
//cSpell:ignore vant
import { Popup } from 'vant';
import SideNavigationAvatar from './SideNavigationAvatar.vue';
import SideNavigationItem from './SideNavigationItem.vue';
import { useTheme } from '@frog/hooks';

const show = defineModel('show', { type: Boolean, required: true });

const { currentTheme, toggleTheme } = useTheme();
</script>

<template>
  <Teleport to="body">
    <Popup
      class="dark:!bg-[#000000] dark:text-white"
      position="left"
      :style="{ width: '70%', height: '100%' }"
      v-model:show="show"
    >
      <div class="!p-4">
        <SideNavigationAvatar />
        <div>
          <div class="!mt-8">
            <SideNavigationItem :title="'首页'" />
            <SideNavigationItem
              @click="toggleTheme"
              :title="currentTheme == 'light' ? '夜间模式' : '日间模式'"
            />
          </div>
        </div>
      </div>
    </Popup>
  </Teleport>
</template>
