<script lang="ts">
  import { css } from '~/ui/1_globals/core/css';

  const container = css`
    width: 100px;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    background: white;
    box-shadow: 0 0 6px -2px gray;
    position: relative;

    &::before {
      content: attr(data-color);
      background: var(--color);
      height: 90px;
      margin-bottom: 5px;
      color: white;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 5px;
      box-sizing: border-box;
      font-weight: normal;
    }
  `;

  export let value = 'black';
</script>

<div class={container} data-color={value} style="--color:{value};">
  <slot />
</div>
