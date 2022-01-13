<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import omit from 'lodash/omit';
  import DirectoryDisplay from './DirectoryDisplay.svelte';
</script>

<Meta
  title="Pieces/DirectoryDisplay"
  argTypes={{
    width: {
      control: {
        type: 'range',
        min: 5,
        max: 100,
        step: 1
      }
    },
    path: { control: 'text' },
    seperator: { control: 'text' },
    placeholder: { control: 'text' }
  }}
/>

<Template let:args>
  <DirectoryDisplay {...omit(args, 'width')} style="width:{args.width}%" />
</Template>

<Story name="Default" args={{ path: 'some/directory/to/find/files/from', width: 70 }} />
