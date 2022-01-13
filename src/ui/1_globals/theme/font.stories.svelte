<script lang="ts">
    import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
    import { css } from '~/ui/1_globals/core/css';
    // import type { FontType } from './font';
    import { font } from './font';

    const cn = (type) => css`${font(type)}`;
    // const cn = (type: FontType) => css`${font(type)}`;
</script>

<Meta
  title="Theme/Font"
  argTypes={{
    text: { control: "text", defaultValue: 'The quick brown fox jumped over the lazy dog' },
    type: {
      control: { type: 'select', options: ['text', 'headline'] }
    }
  }}
/>

<Template let:args>
  <div class={cn(args.type)}>{args.text}</div>
</Template>

<Story name="Default" args={{ type: 'text' }}/>
