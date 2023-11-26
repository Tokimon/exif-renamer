<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { onMount } from 'svelte';
  import Modal from './Modal.svelte';

  export const meta = {
    title: 'Components/Modal',
    argTypes: {
      width: {
        control: {
          type: 'range',
          min: 25,
          max: 80,
          step: 1,
        },
      },
      height: {
        control: {
          type: 'range',
          min: 25,
          max: 80,
          step: 1,
        },
      },
      onClose: { action: 'close' },
    },
  };
</script>

<script lang="ts">
  let modal: HTMLDialogElement | undefined;

  const openModal = () => modal?.showModal();
  onMount(openModal);
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
    <img src="https://placekitten.com/500/500" alt="" on:click="{openModal}" />
    <Modal style="width: {args.width}%; height: {args.height}%;" on:close bind:modal>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere vel laboriosam vero accusamus nobis earum, aliquid a omnis
      quas magni debitis veritatis cumque alias mollitia, id consectetur quos eum.
    </Modal>
  </div>
</Template>

<Story name="Default" args="{{ width: 50, height: 50 }}" />
