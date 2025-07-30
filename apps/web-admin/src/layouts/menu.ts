import { useMenuStore } from '#/stores';
import type { PermissionMenuItem } from '#/types';
import { h, ref } from 'vue';
import type { ItemType } from 'ant-design-vue';

const menuStore = useMenuStore();

export function useMenuData() {
  const menuData = ref<ItemType[]>();

  async function _getMenuData() {
    const response = await menuStore.getMenuList();
    if (response.isSucceed) {
      menuData.value = convertMenuData(response.data);
    }
  }
  _getMenuData();

  return {
    menuData,
    clearMenuList: menuStore.clearMenuList,
  };
}

function convertMenuData(data: PermissionMenuItem[]): ItemType[] {
  return data.map((item) => {
    const baseItem: ItemType = {
      key: item.url,
      title: item.name,
      label: item.name,
      disabled: false,
      icon: renderIcon(item.icon as string),
    };

    return item.children.length > 0
      ? {
          ...baseItem,
          children: convertMenuData(item.children),
        }
      : baseItem;
  });
}

const renderIcon = (icon: string) => {
  return () => h('i', { class: `iconfont ${icon}` });
};
