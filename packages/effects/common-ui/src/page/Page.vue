<script setup lang="ts"></script>

<template>
  <div
    class="h-screen overflow-auto box-border relative bg-amber-500"
    style="scrollbar-width: none"
  >
    <slot />
    <slot name="popup" />
    <slot name="toolbar" />
    <div class="!pb-28">
      <slot name="content" />
    </div>
    <div class="!pt-42">
      <slot name="tabbar" />
    </div>
  </div>
</template>
