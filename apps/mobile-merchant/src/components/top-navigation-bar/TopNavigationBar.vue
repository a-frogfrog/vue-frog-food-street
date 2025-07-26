<script setup lang="ts">
/**
 * @description 顶部导航栏
 */
import { Icon } from '@frog/common-ui';
import { SettingIcon, BarIcon } from '@frog/icons';
import { computed } from 'vue';
import { useTopNavigationBar } from './useTopNavigationBar';

interface Props {
  title?: string;
  isAbsolute?: boolean;
  titleRoute?: boolean;
}
const props = defineProps<Props>();
const absoluteClass = computed(() => {
  return props.isAbsolute
    ? 'absolute bg-[rgba(255,255,255,0.4)] backdrop-blur-sm top-0 left-0 z-10'
    : '';
});

const { routeTitle } = useTopNavigationBar();
const titleValue = computed(() => {
  return props.title || routeTitle.value;
});
</script>

<template>
  <div :class="props.isAbsolute ? absoluteClass : ''" class="w-full">
    <div class="!px-4 !py-2 w-full flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold font-inter">{{ titleValue }}</h1>
      </div>
      <div class="flex gap-4">
        <div>
          <Icon :size="26">
            <BarIcon />
          </Icon>
        </div>
        <div>
          <Icon :size="26">
            <SettingIcon />
          </Icon>
        </div>
      </div>
    </div>
  </div>
</template>
