<script>
  export let svg;
  export let style;
</script>

<svg
  class='svg-icon'
  style={style}
  viewBox={svg.viewBox || '0 0 100 100'}
  type='image/svg+xml'
  xmlns:xlink='http://www.w3.org/1999/xlink'
  focusable={false}
>
  <use xlink:href={'#' + svg.id} />
</svg>
