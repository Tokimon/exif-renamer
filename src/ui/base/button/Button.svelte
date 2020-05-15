<script>
  import { createEventDispatcher } from 'svelte';
  import { css } from 'emotion';

  import { text } from 'ui/theme/text';
  import { pickColor, blacken, whiten } from 'ui/theme/colors';

  export let disabled = false;
  export let href;
  export let color = 'primary';

  const { class: className, ...rest } = $$restProps;

  const on = createEventDispatcher();
  const handleClick = () => !disabled && on('click');

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
      background: ${pickColor(color)};

      &:hover {
        background: ${blacken(color, 15)};
      }
    }
  `;
</script>

<a
  href={!disabled ? href : undefined}
  class={button}
  class:disabled={disabled}
  on:click={handleClick}
  {...rest}
>
  <slot />
</a>
