<script lang="ts">
  import classnames from 'classnames';

  import Button from '~/ui/2_base/button/Button.svelte';

  import { tinyButton } from './TinyButton.style';

  const { className, ...rest } = $$restProps;
  const cn = classnames(tinyButton, className);
</script>

<Button on:click className={cn} {...rest}><slot /></Button>
