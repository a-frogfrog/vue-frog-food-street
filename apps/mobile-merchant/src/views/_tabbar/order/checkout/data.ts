import { computed } from 'vue';

export function useCheckout() {
  const productList = [
    {
      id: '1',
      number: 1,
      price: 242,
      photo:
        'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
    {
      id: '2',
      number: 1,
      price: 2002,
      photo:
        'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
    {
      id: '3',
      number: 1,
      price: 4200,
      photo:
        'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
  ];

  const totalPrice = computed(() => {
    return productList
      .reduce((acc, current) => acc + current.price * current.number, 0)
      .toFixed(2);
  });

  console.log(totalPrice.value);

  return { productList, totalPrice };
}
