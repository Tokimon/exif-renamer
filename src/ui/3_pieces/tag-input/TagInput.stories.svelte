<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Output from '~/ui/1_globals/story-helpers/Output.svelte';
  import { omitEvents } from '~/ui/1_globals/utils/omitEvents';
  import TagInput from './TagInput.svelte';

  export const meta = {
    title: 'Pieces/TagInput',
    component: TagInput,
  };
</script>

<script lang="ts">
  let tags = 'Some tag,a very long tag that might be waaaaay too long for the viewable area';
</script>

<Template let:args>
  <TagInput {...omitEvents(args)} bind:tags />
  <Output>{tags}</Output>
</Template>

<Story name="Default" args="{{ title: 'Tag input', tags }}" />
