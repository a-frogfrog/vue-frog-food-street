import type { Component } from 'vue';

export interface TabBarProps {
  items?: TabBarItemProps[];
  size?: number;
}

export interface TabBarItemProps {
  icon?: Component | string;
  title?: string;
}
