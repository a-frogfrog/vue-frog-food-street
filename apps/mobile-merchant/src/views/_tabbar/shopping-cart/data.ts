import {
  computed,
  reactive,
  ref,
  watch,
  type ComputedRef,
  type Ref,
} from 'vue';
import { useRouter } from 'vue-router';

export interface CartSupplierItem {
  id: string;
  name: string;
  score: number;
  commentNumber: number;
  photo: string;
}

export interface CartProductItem {
  id: string;
  photo: string;
  name: string;
  specification: string;
  price: number;
  number: number;
}

export type CartProduct = CartSupplierItem & {
  products: CartProductItem[];
};

const data = [
  {
    id: 'supp-1',
    name: '鸡脖子供应商',
    score: 4.8,
    commentNumber: 1994,
    photo:
      'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    products: [
      {
        id: '1.1',
        photo:
          'https://thfvnext.bing.com/th/id/OIP.4DE49mV9BEKXyHMb6jC6SAHaFe?r=0&o=7&cb=thfvnextrm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
        name: '正宗野山鸡肉',
        specification: '2200g',
        price: 121.99,
        number: 1,
      },
      {
        id: '1.2',
        photo:
          'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/138152/2/8626/118003/5f61ec37E340e7f4d/67de37e249ef65f5.jpg!q80.dpg',
        name: '百事可乐汽水',
        specification: '330ml*6罐',
        price: 20.09,
        number: 2,
      },
    ],
  },
  {
    id: 'supp-2',
    name: '黄记鸡鸡店',
    score: 4.4,
    commentNumber: 1211,
    photo:
      'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-2.png',
    products: [
      {
        id: '2.1',
        photo: 'https://ufoodin.com/storage/2023/03/6-1024x1024.jpg',
        name: '日本5A和牛',
        specification: '1000g',
        price: 415.23,
        number: 1,
      },
    ],
  },
];

export function useShoppingCart() {
  const productList = reactive<CartProduct[]>(data);
  const router = useRouter();
  const totalPrice = computed(() => {
    let result = 0;
    productList.forEach((f) => {
      f.products.forEach((p) => {
        result += p.number * p.price;
      });
    });
    return result;
  });

  const handleDelete = (id: string) => {
    console.log(`删除商品 ID: ${id}`);
  };

  const handleCheckout = () => {
    router.push('/order/checkout');
  };

  return { productList, totalPrice, handleDelete, handleCheckout };
}

export function useOld(value: Ref | ComputedRef) {
  const old = ref();
  watch(value, (_, oldValue) => {
    old.value = oldValue;
  });
  return { old };
}
