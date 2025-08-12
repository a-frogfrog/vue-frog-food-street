<script setup lang="ts">
import { useOrderItems } from './data';
import OrderItem from './modules/OrderItem.vue';
import OrderProductItem from './modules/OrderProductItem.vue';
import { vSlideIn } from '@frog/directives';

const { orderItems } = useOrderItems();
</script>

<template>
  <div>
    <div class="!p-4">
      <OrderItem
        v-slideIn
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
