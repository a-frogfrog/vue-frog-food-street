<script setup lang="ts">
import { Image, RadioGroup, Radio, Stepper, SwipeCell, Button } from 'vant';
import type { CartProductItem } from '../data';

interface Props {
  item: CartProductItem;
}

type Emits = {
  (e: 'delete', id: string): void;
};

const { item } = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <SwipeCell class="!my-4">
    <template #right>
      <Button
        @click="emit('delete', item.id)"
        square
        text="删除"
        type="danger"
        class="!h-full"
      />
    </template>
    <div class="flex">
      <div class="flex items-center gap-2">
        <RadioGroup>
          <Radio name="1" class="mr-2"></Radio>
        </RadioGroup>
        <Image
          width="6rem"
          height="6rem"
          fit="cover"
          position="left"
          class="rounded-md bg-[#F5F7F7]"
          radius="6"
          :src="item.photo"
        />
      </div>
      <div class="flex-1 !px-3 flex flex-col justify-end">
        <div class="flex-1">
          <h2 class="font-semibold text-lg truncate">{{ item.name }}</h2>
          <p class="text-gray-500 text-sm">{{ item.specification }}</p>
        </div>
        <div class="flex justify-between items-center mt-2">
          <p class="text-red-500 text-xl font-semibold">￥{{ item.price }}</p>
          <Stepper integer min="1" max="100" v-model="item.number" />
        </div>
      </div>
    </div>
  </SwipeCell>
</template>
