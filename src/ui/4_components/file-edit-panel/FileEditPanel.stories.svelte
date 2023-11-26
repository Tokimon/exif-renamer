<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import createFileInfoList from '~/ui/1_globals/story-helpers/createFileInfoList';
  import isImage from '~/ui/1_globals/utils/isImage';
  import FileEditPanel from './FileEditPanel.svelte';

  export const meta = {
    title: 'Components/FileEditPanel',
    component: FileEditPanel,
    parameters: {
      backgrounds: { default: 'dark' },
    },
  };

  const files = createFileInfoList();
</script>

<Template let:args>
  <FileEditPanel {...args} />
</Template>

<Story name="Multiple Files" args="{{ files }}" />
<Story name="Single Non Image File" args="{{ files: files.slice(6, 7) }}" />
<Story name="Single image" args="{{ files: [files.find(({ paths }) => !!paths.length && isImage(paths[0]))] }}" />
