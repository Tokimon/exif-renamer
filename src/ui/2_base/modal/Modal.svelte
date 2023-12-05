<script lang="ts">
  import TinyButton from '~/ui/2_base/tiny-button/TinyButton.svelte';

  export let style = '';
  export let className = '';

  export let modal: HTMLDialogElement | undefined;
</script>

<style>
  .modal {
    background: white;
    width: auto;
    height: auto;
    border-radius: 1rem;
    overflow: hidden;
    border: none;
    box-shadow: 0 0 20px -5px black;
    padding: 0;

    &::backdrop {
      background: rgb(10 10 10 / 80%);
      backdrop-filter: blur(8px);
    }

    & .close-button {
      position: absolute;
      z-index: 9;
      top: 1rem;
      right: 1rem;
    }

    &[open] > .content {
      display: block;
    }
  }

  .content {
    padding: 1rem;
    padding-top: 3rem;
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
  }
</style>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this="{modal}" class="modal {className}" {style} on:close on:click|self="{() => modal?.close()}">
  <TinyButton color="secondary" icon="close" className="close-button" on:click="{() => modal?.close()}" />
  <div class="content"><slot /></div>
</dialog>
