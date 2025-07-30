<script setup lang="ts">
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="font-inter text-lg rounded-md">
    <input
      v-bind="$attrs"
      :value="$attrs.modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="w-full caret-blue-600 !border-none font-inter bg-[#F6F6F6] h-full block !py-4 outline-0"
    />
  </div>
</template>
