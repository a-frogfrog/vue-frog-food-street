<script setup lang="ts">
import { Modal, Form, FormItem, Input, Switch } from 'ant-design-vue';
import { reactive } from 'vue';
import type { PermissionViewItem } from '../data';
import { PermissionType, type PermissionItem } from '#/types';

defineProps<{
  open: boolean;
  title?: string;
  data: PermissionViewItem;
}>();

defineEmits<{
  (e: 'cancel'): void;
  (e: 'ok'): boolean;
}>();

const form = reactive<PermissionItem>({
  id: '',
  name: '',
  url: '',
  status: 1, // 1:启用 2:禁用
  type: '页面权限', // 1:菜单 2:按钮
  parentId: '',
  icon: '',
  serialNumber: 1,
  description: '',
  time: '',
  children: [],
});
</script>

<template>
  <Modal
    :open="open"
    @cancel="$emit('cancel')"
    @ok="$emit('ok')"
    width="40%"
    ok-text="确认"
    cancel-text="取消"
  >
    <section class="text-xl font-bold mb-4 text-center !pb-6">
      {{ title || '🤔 编辑权限信息' }}
    </section>
    <Form :model="data">
      <FormItem label="权限名称">
        <Input v-model:value="form.name" :placeholder="data.label" />
      </FormItem>
      <FormItem label="权限URL">
        <Input v-model:value="form.url" :placeholder="data.url" />
      </FormItem>
      <FormItem label="权限类型">
        <Switch v-model:checked="form.type">
          <template #checkedChildren>
            <span>{{ PermissionType.menu }}</span>
          </template>
          <template #unCheckedChildren>
            <span>{{ PermissionType.page }}</span>
          </template>
        </Switch>
      </FormItem>
      <FormItem label="权限状态">
        <Input v-model:value="form.status" :placeholder="data.status" />
      </FormItem>
      <FormItem label="权限序号">
        <Input v-model:value="form.serialNumber" :placeholder="data.sort" />
      </FormItem>
      <FormItem label="权限图标">
        <Input v-model:value="form.icon" :placeholder="data.icon" />
      </FormItem>
      <FormItem label="权限描述">
        <Input
          v-model:value="form.description"
          :placeholder="data.description"
        />
      </FormItem>
    </Form>
  </Modal>
</template>

<style scoped></style>
