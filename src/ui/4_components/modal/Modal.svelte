<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import classnames from 'classnames';

  import Overlay from '~/ui/2_base/overlay/Overlay.svelte';
  import TinyButton from '~/ui/3_pieces/tiny-button/TinyButton.svelte';

  export let style = '';
  export let className = '';

  const dispatch = createEventDispatcher();

  const onClose = () => dispatch('close');
</script>

<style>
  .window {
    position: relative;
    background: white;
    width: 300px;
    height: 300px;
    border-radius: 2rem;
    box-shadow: 0 0.5rem 1rem rgba(25, 25, 25, 0.3);

    & .close-button {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
    }
  }
</style>

<Overlay on:click="{onClose}">
  <div class="window {className}" {style} role="dialog">
    <TinyButton color="secondary" icon="close" className="close-button" on:click="{onClose}" />
    <slot />
  </div>
</Overlay>
