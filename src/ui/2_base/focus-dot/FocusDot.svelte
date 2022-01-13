<script lang="ts">
  import classnames from 'classnames';

  import { container } from './FocusDot.style';

  export let className: string = '';
</script>

<div class={classnames(container, className)}>
  <slot />
</div>
