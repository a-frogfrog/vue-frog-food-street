import { requestClient } from '#/api/request';

export namespace SupplierApi {
  export interface Supplier {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    contact: string;
    src: string;
  }
}

function fetchRecommendSupplier() {
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
  return Promise.resolve({ data: supplierItems, isSuccess: true });
}

function fetchSupplierList() {
  return requestClient.get('/supplier/list');
}

export const supplierApi = {
  fetchRecommendSupplier,
  fetchSupplierList,
};
