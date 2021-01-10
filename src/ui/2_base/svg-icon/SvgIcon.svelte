<script context="module">
  import appendIcons from '~/ui/1_globals/utils/append-icons';

  appendIcons();
</script>

<script lang="ts">
  import classnames from 'classnames';

  export let svg: string = '';
  export let className: string = '';
</script>

<!-- TODO: Typescript does not allow to use "href" instead of "xlink:href" (which is depricated) -->
<svg
  class={classnames('svg-icon', className)}
  viewBox="0 0 100 100"
  type="image/svg+xml"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  focusable="false">
  <use xlink:href="#{svg}" />
</svg>
