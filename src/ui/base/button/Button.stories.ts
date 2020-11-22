import { action } from '@storybook/addon-actions';

import type { StoryConfig } from '~/definitions/stories.d';

import Button from './Button.template.svelte';



export default {
  title: 'Base/Button'
};

export const Default = (): StoryConfig => ({
  Component: Button,
  props: {
    text: 'Default button'
  },
  on: {
    click: action('Button clicked')
  }
});

export const Themed = (): StoryConfig => ({
  Component: Button,
  props: {
    text: 'Themed button',
    color: 'secondary'
  },
  on: {
    click: action('Themed Button clicked')
  }
});

export const LinkButton = (): StoryConfig => ({
  Component: Button,
  props: {
    text: 'Link button',
    href: 'https://developer.mozilla.org/en-US/',
    target: '_blank'
  }
});

export const Disabled = (): StoryConfig => ({
  Component: Button,
  props: {
    text: 'Disabled button',
    disabled: true
  },
  on: {
    click: action('This click should not show up!')
  }
});
