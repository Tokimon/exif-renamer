<script lang="ts">
  import Button from '~/ui/2_base/button/Button.svelte';

  import classNames from './TinyButton.module.css';

  const { className, ...rest } = $$restProps;
</script>

<Button on:click className="{classNames['tiny-button']} {className}" {...rest}><slot /></Button>
