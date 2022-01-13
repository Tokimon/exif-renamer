<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';

  import Section from '~/ui/1_globals/story-helpers/Section.svelte';
  import Color from '~/ui/1_globals/story-helpers/Color.svelte';

  import colors from './colors';
</script>

<Meta title="Theme/Colors" />

<Story name="Default">
  <Section>
    {#each Object.entries(colors) as [name, color]}
      <Color value={color}>{name}</Color>
    {/each}
  </Section>
</Story>
