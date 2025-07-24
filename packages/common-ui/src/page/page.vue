<script setup lang="ts"></script>

<template>
  <div class="max-w-md mx-auto w-full box-border relative">
    <slot></slot>
    <slot name="popup"></slot>
    <slot name="toolbar"></slot>
    <slot name="tabbar"></slot>
    <slot name="content"></slot>
  </div>
</template>
