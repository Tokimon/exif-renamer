<script lang="ts">
  import classnames from 'classnames';
  import { createEventDispatcher } from 'svelte';
  import { delegateHandler } from 'vanillajs-browser-helpers/delegate';

  import type { PathMapping } from '~/types/path.d';
  import Thumb from '~/ui/components/thumb/Thumb.svelte';
  import { thumb } from '~/ui/components/thumb/Thumb.style';

  import { list } from './FileList.style';

  export let paths: PathMapping = [];

  const { class: className, ...rest } = $$restProps;

  const dispatch = createEventDispatcher();

  const onClick = delegateHandler(`.${thumb}`, function () {
    dispatch('thumbclick', { thumb: this });
  });
</script>

<div class={classnames(list, className)} on:click={onClick} {...rest}>
  {#each paths as [src, count]}
    <Thumb {src} {count} data-path={src} />
  {/each}
</div>
