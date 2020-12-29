<script lang="ts">
  import { onDestroy } from 'svelte';

  import type { IMenuItem } from '~/ui/components/menu-item/MenuItem.d';

  import { getActions } from '~/ui/utils/serverActions';
  import { files } from '~/ui/stores/filesStore';

  import Menu from '~/ui/layouts/menu/Menu.svelte';
  import PageLayout from '~/ui/layouts/page-layout/PageLayout.svelte';
  import FilesPage from '~/ui/pages/files-page/FilesPage.svelte';

  const { findFiles } = getActions();
  const { setPaths } = files;

  let menuItems: IMenuItem[] = [
    {
      icon: 'folder-search',
      label: 'Search',
      onClick: async () => {
        const paths = await findFiles();
        // Paths === null when user cancels
        paths != null && setPaths(paths);
      },
    },
  ];

  let paths: string[] = [];

  const unsubscribe = files.subscribe((state) => {
    paths = Array.from(state.paths);
  });

  onDestroy(unsubscribe);
</script>

<PageLayout>
  <slot slot="menu">
    <Menu {menuItems} />
  </slot>
  <slot slot="content">
    <FilesPage {paths} />
  </slot>
</PageLayout>
