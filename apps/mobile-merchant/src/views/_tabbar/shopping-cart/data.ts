import { reactive } from 'vue';

export interface CartProductItem {
  id: string;
  photo: string;
  name: string;
  specification: string;
  price: number;
  number: number;
}

const data = [
  {
    id: '1',
    photo:
      'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    name: '可口可乐汽水',
    specification: '330ml*6罐',
    price: 18,
    number: 1,
  },
  {
    id: '2',
    photo:
      'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-2.png',
    name: '百事可乐汽水',
    specification: '330ml*6罐',
    price: 20,
    number: 2,
  },
  {
    id: '3',
    photo:
      'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-3.png',
    name: '雪碧汽水',
    specification: '330ml*6罐',
    price: 15,
    number: 1,
  },
];

export function useShoppingCart() {
  const productList = reactive<CartProductItem[]>([...data]);

  const handleDelete = (id: string) => {
    console.log(`删除商品 ID: ${id}`);
  };

  return { productList, handleDelete };
}
