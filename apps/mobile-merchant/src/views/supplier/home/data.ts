export function useMerchantHomeData() {
  const merchantInfo = {
    name: '切果NOW! (河西店)',
    rating: 4.5,
    isDirect: true,
    avatar:
      'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    description: '🤩 欢迎来到切果NOW!，请享受我们的服务。',
    promotion: [
      {
        id: 1,
        title: '龙眼',
        icon: 'fruit',
      },
      {
        id: 2,
        title: '榴莲',
        icon: 'fruit',
      },
    ],
  };

  return {
    merchantInfo,
  };
}
