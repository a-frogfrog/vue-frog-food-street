/**
 *
 * @description: 首页视图组件数据
 */
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export function useProductData() {
  const ProductItems = [
    {
      id: '1',
      productName: '阳澄湖大闸蟹',
      price: 100.99,
      img: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
      isOfficial: true,
      sold: 10,
      stock: 100,
    },
    {
      id: '2',
      productName: '日本5A和牛',
      price: 642.22,
      img: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-2.png',
      isOfficial: false,
      sold: 20,
      stock: 200,
    },
    {
      id: '3',
      productName: '澳洲进口牛肉',
      price: 300.0,
      img: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
      isOfficial: true,
      sold: 30,
      stock: 300,
    },
    {
      id: '4',
      productName: '新西兰进口羊肉',
      price: 200.0,
      img: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-4-x_MPl8Kx.png',
      isOfficial: false,
      sold: 40,
      stock: 400,
    },
    {
      id: '5',
      productName: '泰国进口榴莲',
      price: 100.0,
      img: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-7-C5t2Bw3B.png',
      isOfficial: false,
      sold: 40,
      stock: 400,
    },
  ];
  return {
    ProductItems,
  };
}

export function useSupplierData() {
  const supplierItems = [
    {
      id: '1',
      name: '鸡脖子供应商',
      address: '北京市朝阳区',
      phone: '12345678901',
      email: 'supplier1@example.com',
      contact: '张三',
      src: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
    {
      id: '2',
      name: '黄记鸡鸡店',
      address: '上海市浦东新区',
      phone: '12345678902',
      email: 'supplier2@example.com',
      contact: '李四',
      src: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-2.png',
    },
    {
      id: '3',
      name: '王五家牛肉',
      address: '广州市天河区',
      phone: '12345678903',
      email: 'supplier3@example.com',
      contact: '王五',
      src: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-4-x_MPl8Kx.png',
    },
    {
      id: '4',
      name: '赵六的猪肉店',
      address: '深圳市南山区',
      phone: '12345678904',
      email: 'supplier4@example.com',
      contact: '赵六',
      src: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-7-C5t2Bw3B.png',
    },
  ];

  return {
    supplierItems,
  };
}

export function useHomeHandler() {
  const router = useRouter();
  const popup = reactive({
    show: false,
    id: '',
  });
  const handleAvatarClick = (id: string) => {
    router.push(`/supplier/home/${id}`);
  };

  const handleProductClick = (id: string) => {
    popup.show = true;
    popup.id = id;
  };

  return {
    popup,
    handleAvatarClick,
    handleProductClick,
  };
}
