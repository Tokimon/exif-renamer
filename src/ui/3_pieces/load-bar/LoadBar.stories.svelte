<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import LoadBar from './LoadBar.svelte';

  export const meta = {
    title: 'Pieces/LoadBar',
    component: LoadBar,
    argTypes: {
      value: {
        control: {
          type: 'range',
          min: 0,
          max: 100,
          step: 1,
        },
      },
    },
  };
</script>

<Template let:args>
  <LoadBar {...args} total="{100}" style="width: 400px" />
</Template>

<Story name="Default" args="{{ value: 50 }}" />
