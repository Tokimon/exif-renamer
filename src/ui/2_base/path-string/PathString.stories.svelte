<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import omit from 'lodash/omit';
  import PathString from './PathString.svelte';

  export const meta = {
    title: 'Base/PathString',
    component: PathString,
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
  <div style="width: 200px;"><PathString {...omit(args, 'width')} style="width:{args.width}%" /></div>
</Template>

<Story name="Default" args="{{ path: 'some/directory/to/find/files/from', width: 70 }}" />
