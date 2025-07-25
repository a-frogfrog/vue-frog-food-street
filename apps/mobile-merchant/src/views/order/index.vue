<script setup lang="ts">
import { useOrderItems } from './data';
import OrderItem from './order-item.vue';
import OrderProductItem from './order-product-item.vue';
import { TopNavigationBar } from '#/components';

const { orderItems } = useOrderItems();
</script>

<template>
  <div>
    <TopNavigationBar />
    <div class="!p-4">
      <OrderItem
        v-for="item in orderItems"
        :is-official="item.isOfficial"
        :key="item.orderId"
        :order-id="item.orderId"
        :product-count="item.productCount"
        :supplier-name="item.supplierName"
        :supplier-photo="item.supplierPhoto"
        :time="item.time"
      >
        <template #items>
          <OrderProductItem
            v-for="i in item.items"
            :count="i.count"
            :key="i.name"
            :price="i.price"
            :photo="i.photo"
            :name="i.name"
          />
        </template>
      </OrderItem>
    </div>
  </div>
</template>
