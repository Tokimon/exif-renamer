<script>
  import { createEventDispatcher } from 'svelte'

  export let disabled = false;

  const on = createEventDispatcher();
  const click = () => !disabled && on('click');
</script>

<style lang="stylus">
  bg = #34ab6a;

  .button {
    padding: 0 10px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: bg;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.2s ease, opacity 0.2s ease;
    will-change: background-color, opacity;

    &:hover {
      background: lightness(bg, 30%);
      text-decoration: none;
    }
  }

  .disabled {
    opacity: 0.5;
  }
</style>

<a class='button' class:disabled={disabled} on:click={click}>
  <slot />
</a>
