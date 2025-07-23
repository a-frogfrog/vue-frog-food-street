<script setup lang="ts">
import type { ModalProps, ModalEmits } from './types';
import ModalContent from './modal-content.vue';

const props = defineProps<ModalProps>();
const emit = defineEmits<ModalEmits>();
</script>
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="props.show" class="frog-modal-overlay" tabindex="-1">
        <div class="frog-modal">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
