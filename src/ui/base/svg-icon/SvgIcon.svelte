<script lang="ts">
  export let svg: string = '';
</script>

<svg
  class="svg-icon"
  viewBox="0 0 100 100"
  type="image/svg+xml"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  focusable="false">
  <use xlink:href="icons.svg#{svg}" />
</svg>
