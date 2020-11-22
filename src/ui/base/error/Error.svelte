<script context="module" lang="ts">
  import SvgIcon from '~/ui/svg/svg-icon/SvgIcon.svelte';

  import { error } from './Error.style';
</script>

<div class={error}>
  <SvgIcon svg="alert" />
  <slot />
</div>
