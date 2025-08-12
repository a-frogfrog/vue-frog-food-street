<script setup lang="ts">
interface Props {
  photo: string;
  name: string;
  price: number;
  count: number;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex !my-6">
    <img class="h-12 w-12 rounded-md" :src="props.photo" :alt="props.name" />
    <div class="!pl-3 flex justify-between w-full">
      <div class="text-sm !pb-0.5 font-semibold flex flex-col justify-between">
        <h3>{{ props.name }}</h3>
        <p class="font-smiley text-gray-500">x {{ props.count }}</p>
      </div>
      <div>
        <h3 class="text-gray-600 font-inter">￥{{ props.price }}</h3>
      </div>
    </div>
  </div>
</template>
