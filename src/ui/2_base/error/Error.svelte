<script lang="ts">
  import SvgIcon from '~/ui/base/svg-icon/SvgIcon.svelte';

  import { error } from './Error.style';
</script>

<div class={error}>
  <SvgIcon svg="alert" />
  <slot />
</div>
