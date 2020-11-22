<script lang="ts">
  import { css } from '@emotion/css';

  export let title;

  const headline = css`
    font-family: sans-serif;
    font-size: 21px;
  `;

  const className = css`
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
<div class={className}>
  <slot />
</div>
