<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import classnames from 'classnames';

  import Overlay from '~/ui/2_base/overlay/Overlay.svelte';
  import TinyButton from '~/ui/3_pieces/tiny-button/TinyButton.svelte';

  import { window, closeBtn } from './Modal.style';

  export let style = '';
  export let className = '';

  const dispatch = createEventDispatcher();

  const onClose = () => dispatch('close');
</script>

<Overlay on:click={onClose}>
  <div class={classnames(window, className)} {style} role="dialog">
    <TinyButton
      color="secondary"
      icon="close"
      className={closeBtn}
      on:click={onClose}
    />

    <slot />
  </div>
</Overlay>
