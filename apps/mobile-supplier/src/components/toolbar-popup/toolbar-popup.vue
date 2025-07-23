<script setup lang="ts">
import { Popup, showConfirmDialog } from 'vant';
import ToolbarPopupItem from './toolbar-popup-item.vue';
import ToolbarPopupLogout from './toolbar-popup-logout.vue';
import ToolbarPopupUser from './toolbar-popup-user.vue';
import { useTheme } from '@frog/hooks';
import { useUserStore } from '#/stores';

const show = defineModel('show', {
  type: Boolean,
  required: true,
});

function useToolbarPopupLogout() {
  const { logout } = useUserStore();
  const userLogout = () => {
    confirmLogout();
  };
  const confirmLogout = async () => {
    const res = await showConfirmDialog({ message: '确定要退出登录吗？' });
    if (res === 'confirm') {
      logout();
    }
  };

  return {
    userLogout,
  };
}

const { toggleTheme } = useTheme();
const { userLogout } = useToolbarPopupLogout();
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
      <ToolbarPopupLogout @logout="userLogout" />
      <ToolbarPopupUser />
      <ToolbarPopupItem @click="toggleTheme" />
    </Popup>
  </div>
</template>

<style scoped></style>
