<script lang="ts">
  import { wrap, background } from './Overlay.style';
</script>

<div class={wrap}>
  <div class={background} on:click />
  <slot />
</div>
