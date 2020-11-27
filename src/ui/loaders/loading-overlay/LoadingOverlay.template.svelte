<script context="module">
  import { css } from '@emotion/css';

  import LoadingOverlay from './LoadingOverlay.svelte';
</script>

<script lang="ts">
  export let text = '';

  const Ex = css`
    width: 200px;
    height: 200px;
    background: url(https://placeimg.com/200/200/nature);

    > * {
      width: 100%;
      height: 100%;
    }
  `;
</script>

<div class={Ex}>
  <LoadingOverlay>{text}</LoadingOverlay>
</div>
