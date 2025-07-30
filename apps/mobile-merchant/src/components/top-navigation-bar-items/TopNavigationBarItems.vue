<script setup lang="ts">
import { Icon } from '@frog/common-ui';
import { SettingIcon, BarIcon, ShoppingCart } from '@frog/icons';

type Emits = {
  (e: 'barClick'): void;
  (e: 'cartClick'): void;
  (e: 'settingClick'): void;
};

const emit = defineEmits<Emits>();
</script>
<template>
  <div class="flex gap-4">
    <div @click="emit('cartClick')">
      <Icon :size="26">
        <ShoppingCart />
      </Icon>
    </div>
    <div @click="emit('barClick')">
      <Icon :size="26">
        <BarIcon />
      </Icon>
    </div>
    <div @click="emit('settingClick')">
      <Icon :size="26">
        <SettingIcon />
      </Icon>
    </div>
  </div>
</template>
