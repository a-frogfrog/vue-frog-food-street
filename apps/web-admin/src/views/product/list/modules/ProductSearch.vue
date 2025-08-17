<script setup lang="ts">
import { ref } from 'vue';
import { Button, Input, Select, type SelectProps } from 'ant-design-vue';

const productOptions = ref<SelectProps['options']>([
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
]);

const productTypes = [
  {
    label: '全部',
    isActive: true,
  },
  {
    label: '水果',
    isActive: false,
  },
  {
    label: '蔬菜',
    isActive: false,
  },
  {
    label: '肉类',
    isActive: false,
  },
  {
    label: '海鲜',
    isActive: false,
  },
  {
    label: '饮品',
    isActive: false,
  },
];
</script>

<template>
  <article class="!pb-3">
    <div class="header-content !p-3 rounded-md">
      <h1 class="text-xl">商品列表</h1>
      <div class="header-filter">
        <div class="filter-item flex items-center !py-3">
          <div class="min-w-22">
            <span>商品种类:</span>
          </div>
          <div class="!px-3 flex-1 flex justify-end">
            <div class="gap-2 flex flex-1">
              <template v-for="item in productTypes" :key="item.label">
                <Button :type="item.isActive ? 'primary' : 'default'">{{
                  item.label
                }}</Button>
              </template>
            </div>
            <div>
              <Button type="text">更多</Button>
            </div>
          </div>
        </div>
        <div class="filter-item flex items-center !py-3">
          <div class="min-w-22">
            <span>提供者:</span>
          </div>
          <div class="!px-3 gap-2 flex flex-1">
            <Input class="!w-lg" placeholder="请输入提供者"></Input>
          </div>
        </div>
        <div class="filter-item flex items-center !py-3">
          <div class="min-w-22">
            <span>其他选项:</span>
          </div>
          <div class="!px-3 gap-4 flex flex-1">
            <div>
              <span class="text-sm text-gray-500">商品状态：</span>
              <Select class="!w-72" :options="productOptions"></Select>
            </div>
            <div>
              <span class="text-sm text-gray-500">商品状态：</span>
              <Select class="!w-72" :options="productOptions"></Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
