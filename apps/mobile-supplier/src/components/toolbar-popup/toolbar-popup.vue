<script setup lang="ts">
import { Popup } from 'vant';
import ToolbarPopupItem from './toolbar-popup-item.vue';
import ToolbarPopupLogout from './toolbar-popup-logout.vue';
import ToolbarPopupUser from './toolbar-popup-user.vue';
import { useTheme } from '@frog/hooks';

const show = defineModel('show', {
  type: Boolean,
  required: true,
});

const { toggleTheme } = useTheme();
</script>
<template>
  <div>
    <Popup
      teleport="body"
      v-model:show="show"
      position="right"
      :style="{ width: '70%', height: '100%' }"
      class="dark:!bg-[#1f1f1f] dark:!text-white"
    >
      <ToolbarPopupLogout />
      <ToolbarPopupUser />
      <ToolbarPopupItem @click="toggleTheme" />
    </Popup>
  </div>
</template>

<style scoped></style>
