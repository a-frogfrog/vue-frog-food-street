<script setup lang="ts"></script>

<template>
  <div
    class="max-w-md mx-auto page w-full overflow-auto box-border relative bg-black"
  >
    <slot></slot>
    <slot name="popup"></slot>
    <slot name="toolbar"></slot>
    <slot name="tabbar"></slot>
    <slot name="content"></slot>
  </div>
</template>

<style scoped>
.page {
  height: 100vh;
}
</style>
