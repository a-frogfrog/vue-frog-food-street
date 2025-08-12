/**
 *
 * @description: 首页视图组件数据
 */
import { supplierApi, type SupplierApi } from '#/api';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export function useProductData() {
  const ProductItems = [
    {
      id: '1',
      productName: '阳澄湖大闸蟹',
      price: 100.99,
      img: 'https://th.bing.com/th/id/R.a7b488ddd064ccd3bada696afe47dade?rik=H%2bKq3MvqmwtJWw&riu=http%3a%2f%2fwww.szdzx.com%2fuploads%2fallimg%2f190624%2f1-1Z624134305928.JPG&ehk=%2bLI%2fCPq4VbtwRnvcF41n7j7rJzzr828DGwiU28Y4%2fsc%3d&risl=&pid=ImgRaw&r=0',
      isOfficial: true,
      sold: 10,
      stock: 100,
    },
    {
      id: '2',
      productName: '日本5A和牛',
      price: 642.22,
      img: 'https://ufoodin.com/storage/2023/03/6-1024x1024.jpg',
      isOfficial: false,
      sold: 20,
      stock: 200,
    },
    {
      id: '3',
      productName: '澳洲进口牛肉',
      price: 300.0,
      img: 'https://img.alicdn.com/i1/2208757843361/O1CN01bXtweA1ahO28Pui9b_!!2208757843361.jpg',
      isOfficial: true,
      sold: 30,
      stock: 300,
    },
    {
      id: '4',
      productName: '新西兰进口羊肉',
      price: 200.0,
      img: 'https://tse2.mm.bing.net/th/id/OIP.ZxVhRVjR_z4ow_FT-oXvjwAAAA?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
      isOfficial: false,
      sold: 40,
      stock: 400,
    },
    {
      id: '5',
      productName: '泰国进口榴莲',
      price: 100.0,
      img: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t20326/71/2290914297/294572/d327aa92/5b51bf63Na3aa0385.jpg!q80.dpg',
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
  const supplierItems = reactive<SupplierApi.Supplier[]>([]);

  const getSupplierData = async () => {
    const response = await supplierApi.fetchRecommendSupplier();
    if (response.isSuccess && response.data) {
      supplierItems.push(...response.data);
    }
  };
  getSupplierData();
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
