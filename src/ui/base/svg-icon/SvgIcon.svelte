<script lang="ts">
  import classnames from 'classnames';

  export let svg: string;

  const { class: className, ...rest } = $$restProps;
</script>

<svg
  class={classnames('svg-icon', className)}
  viewBox="0 0 100 100"
  type="image/svg+xml"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  focusable="false"
  {...rest}>
  <use xlink:href={'#' + svg} />
</svg>
