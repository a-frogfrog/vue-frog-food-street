<script setup lang="ts">
/**
 * @description 登录表单
 */

import { Input } from '#/components';
import { FrogButton } from '@frog/common-ui';
import { useAuthStore } from '#/stores';
import { ref } from 'vue';

function useLogin() {
  const authStore = useAuthStore();
  const loginForm = ref({
    account: '',
    password: '',
  });

  const handleLogin = () => {
    authStore.login(loginForm.value);
  };

  return {
    loginForm,
    handleLogin,
  };
}

const { loginForm, handleLogin } = useLogin();
</script>

<template>
  <div class="!px-4">
    <div class="!mt-4">
      <Input
        v-model="loginForm.account"
        maxlength="11"
        placeholder="请输入账号"
      />
    </div>
    <div class="!mt-4">
      <Input
        v-model="loginForm.password"
        maxlength="30"
        type="password"
        placeholder="请输入密码"
      />
    </div>
  </div>
  <div class="!px-4 !mt-4">
    <FrogButton
      type="primary"
      class="!py-3 tracking-widest text-xl font-smiley"
      size="large"
      @click="handleLogin"
      >登录</FrogButton
    >
  </div>
</template>
