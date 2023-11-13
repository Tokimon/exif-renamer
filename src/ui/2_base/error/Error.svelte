<script lang="ts">
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';
</script>

<style>
  .error {
    color: var(--danger);
    display: flex;
    align-items: center;

    & .svg-icon {
      width: 1em;
      height: 1em;
      margin-right: 5px;
    }
  }
</style>

<div class="error">
  <SvgIcon svg="alert" />
  <slot />
</div>
