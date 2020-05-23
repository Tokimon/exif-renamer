<script>
  import { css } from 'emotion';

  import Thumb from 'ui/components/thumb/Thumb.svelte';

  export let paths = [];

  const list = css`
    display: flex;
    flex-wrap: wrap;

    > * {
      margin: 5px;
    }
  `;
</script>

<div class={list}>
  {#each paths as [src, count]}
    <Thumb {src} {count} />
  {/each}
</div>
