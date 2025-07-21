<script setup lang="ts"></script>

<template>
  <div class="page w-full h-dvh overflow-auto box-border relative">
    <slot></slot>
    <slot name="popup"></slot>
    <slot name="toolbar"></slot>
    <slot name="tabbar"></slot>
    <slot name="content"></slot>
  </div>
</template>
