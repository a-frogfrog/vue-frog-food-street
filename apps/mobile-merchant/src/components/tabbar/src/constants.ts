import type { Component } from 'vue';

export const TAB_BAR_ACTIVE_KEY = 'active';
export const TAB_BAR_ITEM_SIZE = 24;

export interface TabBarProps {
  active?: string;
  activeColor?: string;
  items?: TabBarItemProps[];
  size?: number;
}

export interface TabBarItemProps {
  name: string;
  icon?: Component | string;
  label?: string;
  cover?: string;
}

export type TabBarEmits = {
  (e: 'change', value: string): void;
};
