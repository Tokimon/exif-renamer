<script context="module" lang="ts">
  import { css } from '@emotion/css';

  import { text } from './text';
</script>

<script lang="ts">
  const p = css`
    ${text}
  `;
</script>

<p class={p}>The quick brown fox jumped over the lazy dog</p>
