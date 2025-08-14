import type { Component } from 'vue';

/**
 * 图标或图片默认大小
 */
export const TAB_BAR_ITEM_SIZE = 24;

export interface TabBarProps {
  /**
   * @description 激活项
   */
  active?: string;
  /**
   * @description 激活颜色
   */
  activeColor?: string;
  /**
   * @description tabBar 项
   */
  items?: TabBarItemProps[];

  /**
   * @description 图标或图片默认大小
   */
  iconSize?: number;
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
