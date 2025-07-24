<script setup lang="ts">
/**
 * @description: 首页搜索
 */
import { useRouter } from 'vue-router';

function useSearch() {
  const router = useRouter();
  const handleSearch = () => {
    router.push({ name: 'search' });
  };

  return {
    handleSearch,
  };
}

const { handleSearch } = useSearch();
</script>

<template>
  <div>
    <img
      class="h-48 object-cover w-full"
      src="/imgs/background/welcome.webp"
      alt=""
    />
    <div class="-translate-y-6 w-full !px-5">
      <input
        placeholder="搜索商品"
        class="bg-white outline-0 h-14 shadow-md w-full"
        type="text"
        @focus="handleSearch"
      />
    </div>
  </div>
</template>
