<script>
  export let svg;

  const { class: className, ...rest } = $$restProps;
</script>

<svg
  class='svg-icon {className}'
  viewBox={svg.viewBox || '0 0 100 100'}
  type='image/svg+xml'
  xmlns:xlink='http://www.w3.org/1999/xlink'
  focusable={false}
  {...rest}
>
  <use xlink:href={'#' + svg.id} />
</svg>
