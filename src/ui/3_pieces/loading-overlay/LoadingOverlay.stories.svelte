<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import LoadingOverlay from './LoadingOverlay.svelte';
  import { onMount } from 'svelte';

  export const meta = {
    title: 'Pieces/LoadingOverlay',
    component: LoadingOverlay,
    argTypes: {
      text: { control: 'text' },
    },
  };
</script>

<script lang="ts">
  let overlay: HTMLDivElement | undefined;

  const openOverlay = () => overlay?.showPopover();
  onMount(openOverlay);
</script>

<style>
  img {
    width: 100%;
    height: 100%;
  }

  .parent {
    position: absolute;
    inset: 3rem;
    border: 1rem solid red;
  }
</style>

<Template let:args>
  <div class="parent">
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
    <img src="https://placekitten.com/500/500" alt="" on:click="{openOverlay}" />
    <LoadingOverlay bind:overlay>{args.text}</LoadingOverlay>
  </div>
</Template>

<Story name="Default" args="{{ text: 'Loading text' }}" />
