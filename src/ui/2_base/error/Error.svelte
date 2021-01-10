<script lang="ts">
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';

  import { error } from './Error.style';
</script>

<div class={error}>
  <SvgIcon svg="alert" />
  <slot />
</div>
