<script lang="ts">
  import { css } from '~/ui/1_globals/utils/css';

  export let title: string = '';

  const headline = css`
    font-family: sans-serif;
    font-size: 21px;
  `;

  const body = css`
    font-family: sans-serif;
    display: flex;
    flex-wrap: wrap;

    > * {
      margin: 5px;
    }
  `;
</script>

{#if title}
  <h2 class={headline}>{title}</h2>
{/if}
<div class={body}>
  <slot />
</div>
