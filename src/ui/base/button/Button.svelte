<script lang="typescript">
  import { css } from 'emotion';

  import { text } from '~/ui/theme/text';
  import { color as themeColor, blacken, whiten } from '~/ui/theme/colors';

  export let disabled = false;
  export let href;
  export let color = 'primary';

  const { class: className, ...rest } = $$restProps;

  const button = css`
    ${text}
    padding: 0 10px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: default;
    background: ${whiten(color, 60)};
    color: white;
    text-transform: uppercase;
    transition: background-color 0.2s ease, opacity 0.2s ease;
    will-change: background-color, opacity;
    text-decoration: none;

    &:not(.disabled) {
      cursor: pointer;
      background: ${themeColor(color)};

      &:hover {
        background: ${blacken(color, 15)};
      }
    }
  `;
</script>

{#if disabled}
  <span class='button disabled {button}' {...rest}>
    <slot />
  </span>
{:else}
  <a
    class='button {button}'
    {href}
    on:click
    {...rest}
  >
    <slot />
  </a>
{/if}
