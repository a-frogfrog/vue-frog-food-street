<script setup lang="ts">
import type { TabBarEmits, TabBarProps } from './types';
import { useTabBar } from './use-tabbar';

const active = defineModel('active', {
  type: String,
});

const props = defineProps<TabBarProps>();
const emit = defineEmits<TabBarEmits>();

const { goToPage } = useTabBar();
</script>

<template>
  <div class="tabbar dark:bg-[#1e1e1e]">
    <div class="tabbar-content">
      <template v-for="item in props.items" :key="item.name">
        <div
          class="tabbar-item"
          :class="[active === item.name ? 'is-active' : '']"
          @click="(emit('tabBarItemClick', item.name), goToPage(item.name))"
        >
          <template v-if="item.cover">
            <div class="tabbar-cover">
              <img :src="item.cover" alt="" />
            </div>
          </template>
          <template v-else>
            <div class="tabbar-item-content">
              <i class="icon" :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 0 0;
  /* background-color: rgba(255, 255, 255, 0.6); */
  backdrop-filter: blur(10px);
  filter: saturate(200%); /* 高饱和度 */
  z-index: 9999;
}

.tabbar-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding: 4px;
}

.tabbar-item {
  border-radius: 50%;
  cursor: pointer;
  flex: 1;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out,
    filter 0.3s ease-in-out;
}

.tabbar-item.is-active {
  color: #0c331f;
  text-shadow: #0c331f 0 0 10px;
}

.tabbar-item.is-active .tabbar-cover img {
  transform: scale(1.12);
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px #0c331f59;
}

.tabbar-item-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.icon {
  font-size: 20px;
}

.tabbar-cover {
  font-size: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out,
    filter 0.3s ease-in-out;
}

.tabbar-cover img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #fff;
  transition: transform 0.3s ease-in-out;
}
</style>
