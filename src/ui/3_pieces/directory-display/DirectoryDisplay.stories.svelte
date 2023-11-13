<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import omit from 'lodash/omit';
  import DirectoryDisplay from './DirectoryDisplay.svelte';

  export const meta = {
    title: 'Pieces/DirectoryDisplay',
    component: DirectoryDisplay,
    argTypes: {
      width: {
        control: {
          type: 'range',
          min: 5,
          max: 100,
          step: 1,
        },
      },
    },
  };
</script>

<Template let:args>
  <DirectoryDisplay {...omit(args, 'width')} style="width:{args.width}%" on:click />
</Template>

<Story name="Default" args="{{ path: 'some/directory/to/find/files/from', width: 70 }}" />
