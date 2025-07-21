<script setup lang="ts">
import { CloseIcon } from '@frog/icons';
import { FrogButton } from '../button';
import type { ModalContentProps, ModalContentEmits } from './types';

const props = defineProps<ModalContentProps>();
const emit = defineEmits<ModalContentEmits>();
</script>
<template>
  <div class="frog-modal-content">
    <header class="frog-modal-header">
      <slot name="header">
        <span>
          {{ props.title || 'tip' }}
        </span>
        <component :is="props.closeIcon || CloseIcon" @click="emit('close')" />
      </slot>
    </header>
    <div class="frog-modal-body">
      <slot>
        <span>{{ props.message || 'Are you sure?' }}</span>
      </slot>
    </div>
    <footer class="frog-modal-footer">
      <slot name="footer">
        <FrogButton type="primary" @click="emit('confirm')">
          {{ props.confirmText || 'Confirm' }}</FrogButton
        >
        <FrogButton @click="emit('close')">{{
          props.cancelText || 'Cancel'
        }}</FrogButton>
      </slot>
    </footer>
  </div>
</template>
