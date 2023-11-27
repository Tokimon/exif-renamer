<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import { mockDeletion } from '~/ui/1_globals/story-helpers/mock-files';
  import TrashButton from './TrashButton.svelte';

  export const meta = {
    title: 'Pieces/TrashButton',
    component: TrashButton,
  };

  mockDeletion();
</script>

<Story name="Default">
  <TrashButton on:click />
</Story>
