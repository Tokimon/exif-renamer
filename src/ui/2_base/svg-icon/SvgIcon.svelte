<script lang="ts" context="module">
  import { type IconNames } from '~/ui/0_assets/svg/icons';
  import appendIcons from '~/ui/1_globals/core/appendIcons';

  appendIcons();
</script>

<script lang="ts">
  export let svg: IconNames;
  export let className: string = '';
  export let style: string = '';
</script>

<style>
  .svg-icon {
    aspect-ratio: 1;
  }
</style>

<svg
  class="svg-icon {className}"
  {style}
  viewBox="0 0 100 100"
  type="image/svg+xml"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  focusable="false"
>
  <use href="#{svg}"></use>
</svg>
