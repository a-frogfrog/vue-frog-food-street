export function useOrderItems() {
  const orderItems = [
    {
      time: '2023-01-01 10:00:00',
      isOfficial: true,
      supplierName: '鸡脖子供应商',
      supplierPhoto:
        'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
      orderId: '1234567890',
      productCount: 5,
      items: [
        {
          name: '鸡肉',
          price: 41.99,
          count: 2,
          photo:
            'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
        },
      ],
    },
    {
      time: '2023-01-02 14:30:00',
      isOfficial: false,
      supplierName: '黄记鸡鸡店',
      supplierPhoto:
        'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-2.png',
      orderId: '0987654321',
      productCount: 5,
      items: [
        {
          name: '鸡肉',
          price: 20.5,
          count: 2,
          photo:
            'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
        },
        {
          name: '日本5A和牛',
          price: 20.5,
          count: 2,
          photo:
            'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
        },
      ],
    },
  ];

  return {
    orderItems,
  };
}
