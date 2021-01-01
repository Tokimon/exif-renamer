<script lang="ts">
  import classnames from 'classnames';

  export let svg: string = '';
  export let className: string = '';
</script>

<svg
  class={classnames('svg-icon', className)}
  viewBox="0 0 100 100"
  type="image/svg+xml"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  focusable="false">
  <use xlink:href="icons.svg#{svg}" />
</svg>
