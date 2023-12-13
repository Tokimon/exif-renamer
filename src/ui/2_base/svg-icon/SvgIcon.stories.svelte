<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import Section from '~/ui/1_globals/story-helpers/Section.svelte';
  import { iconNames } from '~/ui/0_assets/svg/icons';
  import SvgIcon from './SvgIcon.svelte';

  export const meta = {
    title: 'Base/SvgIcon',
    component: SvgIcon,
  };
</script>

<style>
  .icon {
    padding: 0.5rem;
    border-radius: 0.2rem;
    box-shadow: 0 0 2px var(--light-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  :global(.icon-example) {
    width: 2rem;
  }

  :global(.svg-icon) {
    fill: var(--light-text);
  }
</style>

<Story name="All Icons">
  <Section gridMin="{130}">
    {#each iconNames as name}
      <div class="icon">
        <SvgIcon svg="{name}" className="icon-example" />
        {name}
      </div>
    {/each}
  </Section>
</Story>
