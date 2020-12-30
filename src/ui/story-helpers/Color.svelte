<script lang="ts" context="module">
  import { css } from '~/ui/utils/css';

  const container = css`
    width: 100px;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    background: white;
    box-shadow: 0 0 6px -2px gray;

    &::before {
      content: var(--color, black);
      background: var(--color, black);
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
</script>

<script lang="ts">
  export let value = 'black';
</script>

<div class={container} style="--color:{value};">
  <slot />
</div>
