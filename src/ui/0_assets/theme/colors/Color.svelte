<script lang="ts" context="module">
  import type { Colors } from './types.js';
</script>

<script lang="ts">
  export let value: Colors | null = null;
</script>

<style>
  .container {
    width: 100px;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    background: white;
    box-shadow: 0 0 6px -2px gray;
    position: relative;

    &::before {
      content: attr(data-color);
      background: var(--color);
      height: 90px;
      margin-bottom: 5px;
      color: white;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 5px;
      box-sizing: border-box;
      font-weight: normal;
    }
  }
</style>

<div class="container" data-color={value} style:--color={value ? `var(--${value})` : 'block'}>
  <slot />
</div>
