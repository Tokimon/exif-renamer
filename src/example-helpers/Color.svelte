<script lang="typescript">
  import { css } from 'emotion';

  import { text } from '~/ui/theme/text';

  export let value = 'black';

  const container = css`
    ${text}
    width: 150px;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    background: white;
    box-shadow: 0 0 6px -2px gray;

    &::before {
      content: '${value}';
      background: ${value};
      height: 140px;
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

<div class={container}>
  <slot />
</div>
