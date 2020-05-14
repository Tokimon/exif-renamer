<script>
  import { createEventDispatcher } from 'svelte';
  import { css } from 'emotion';
  import _color from 'color';

  import { text } from 'ui/base-css/text';

  export let disabled = false;
  export let href;
  export let color = '#4eabd2';

  const hoverColor = _color(color).darken(0.3).hex();
  const on = createEventDispatcher();
  const handleClick = () => !disabled && on('click');

  const disabledCss = css`
    opacity: 0.5;
  `;

  const enabledCss = css`
    &:hover {
      background: ${hoverColor};
    }
  `;

  const className = css`
    ${text}
    padding: 0 10px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: ${color};
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s ease, opacity 0.2s ease;
    will-change: background-color, opacity;
    text-decoration: none;
    ${disabled ? disabledCss : enabledCss}
  `;
</script>

<a href={href} class={className} on:click={handleClick}>
  <slot />
</a>
