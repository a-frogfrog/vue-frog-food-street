<script setup lang="ts">
import { Button, Table } from 'ant-design-vue';

const columns = [
  {
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '商品种类',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '提供者',
    dataIndex: 'provider',
    key: 'provider',
  },
  {
    title: '商品状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    type: '果蔬',
    provider: '张三',
    status: '上架',
  },
  {
    key: '2',
    name: 'Jim Green',
    type: '果蔬',
    provider: '张三',
    status: '上架',
  },
  {
    key: '3',
    name: 'Joe Black',
    type: '果蔬',
    provider: '张三',
    status: '上架',
  },
  {
    key: '4',
    name: 'Jim Red',
    type: '果蔬',
    provider: '张三',
    status: '上架',
  },
  {
    key: '4',
    name: 'Jim Red',
    type: '果蔬',
    provider: '张三',
    status: '上架',
  },
  {
    key: '4',
    name: 'Jim Red',
    type: '果蔬',
    provider: '张三',
    status: '上架',
  },
];
</script>

<template>
  <div class="!py-3">
    <div class="main-content !p-3 rounded-md">
      <Table :columns="columns" :data-source="data">
        <template #bodyCell="{ column }">
          <template v-if="column.dataIndex === 'action'">
            <Button type="link">编辑</Button>
            <Button type="link">删除</Button>
          </template>
        </template>
      </Table>
    </div>
  </div>
</template>
