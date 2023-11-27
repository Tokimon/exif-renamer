<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { iconNames } from '~/ui/0_assets/svg/icons';
  import NavButton from './NavButton.svelte';

  export const meta = {
    title: 'Pieces/NavButton',
    component: NavButton,
    argTypes: {
      icon: {
        options: iconNames,
        control: { type: 'select' },
      },
    },
  };
</script>

<style>
  .example {
    margin-left: 300px;
    background: gray;
    padding: 2rem;
    height: fit-content;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 3rem;
  }
</style>

<Template let:args>
  <div class="example">
    <NavButton {...args} on:click>
      {args.text ?? ''}
    </NavButton>

    <NavButton icon="calendar">A second button</NavButton>
  </div>
</Template>

<Story name="Default" args="{{ text: 'Navigation Button', icon: 'play' }}" />
