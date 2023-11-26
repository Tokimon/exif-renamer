<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Output from '~/ui/1_globals/story-helpers/Output.svelte';
  import DateInput from './DateInput.svelte';

  export const meta = {
    title: 'Pieces/DateInput',
    component: DateInput,
    argTypes: {
      date: { control: { type: 'date' } },
    },
  };
</script>

<script lang="ts">
  let date = new Date().toISOString();
  const baseArgs = { name: 'example', title: 'Date Input', date };
</script>

<Template let:args>
  <DateInput {...args} bind:date />
  <Output>{date}</Output>
</Template>

<Story name="Without Time" args="{{ ...baseArgs }}" />
<Story name="With Time" args="{{ ...baseArgs, withTime: true }}" />
