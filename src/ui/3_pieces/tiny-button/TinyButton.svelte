<script lang="ts">
  import Button from '~/ui/2_base/button/Button.svelte';

  import { tiny } from './TinyButton.module.css';

  const { className, ...rest } = $$restProps;
</script>

<Button on:click className="{tiny} {className}" {...rest}><slot /></Button>
