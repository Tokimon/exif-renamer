<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import SvgIcon from './SvgIcon.svelte';

  export const meta = {
    title: 'Base/SvgIcon',
    component: SvgIcon,
  };
</script>

<Template let:args>
  <SvgIcon style="width: 5rem; height: 5rem;" {...args} />
</Template>

<Story name="Default" args="{{ svg: 'book' }}" />
