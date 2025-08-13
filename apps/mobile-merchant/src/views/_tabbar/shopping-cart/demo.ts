import { defineComponent, h } from 'vue';
import CartProductList from './modules/CartProductList.vue';
import CartActionBar from './modules/CartActionBar.vue';

export default defineComponent(() => {
  return () =>
    h(
      'div',
      {
        class: 'bg-[#F5F5F5] h-full flex flex-col justify-end !pb-28',
      },
      [h(CartProductList), h(CartActionBar)],
    );
});
