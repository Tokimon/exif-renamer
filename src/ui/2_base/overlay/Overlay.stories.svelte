<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import { onMount } from 'svelte';
  import Overlay from './Overlay.svelte';

  export const meta = {
    title: 'Base/Overlay',
    component: Overlay,
  };
</script>

<script lang="ts">
  let overlay: HTMLDivElement | undefined;

  const toggleOverlay = () => overlay?.togglePopover();

  onMount(toggleOverlay);
</script>

<style>
  img {
    width: 100%;
    height: 100%;
  }

  div {
    background: var(--caution);
    color: black;
    font-weight: bolder;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 4px;
    margin: auto;
    cursor: pointer;
    text-align: center;
  }

  .parent {
    position: absolute;
    inset: 3rem;
    border: 1rem solid red;
  }
</style>

<Story name="Default">
  <div class="parent">
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
    <img src="https://placekitten.com/500/500" alt="" on:click="{toggleOverlay}" />
    <Overlay bind:overlay>
      <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
      <div on:click="{toggleOverlay}">
        This element has its own styling
        <br />
        Click to close overlay
      </div>
    </Overlay>
  </div>
</Story>
