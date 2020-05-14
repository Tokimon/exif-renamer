<script>
  import { css } from 'emotion';

  export let value = 0;
  export let total = 0;
  export let style;

  const bar = css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgba(40, 187, 174, 0.85);
    transition: width 0.2s linear;
    will-change: width;
  `;

  const text = css`
    position: relative;
    z-index: 1;
  `;

  const container = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid silver;
    border-radius: 10px;
    height: 60px;
    font-size: 20px;
    color: white;
    text-shadow: 0 0 2px gray;
    padding: 0 10px;
    overflow: hidden;
  `;
</script>

<div class='loadbar {container}' style={style}>
  <div class={bar} style='width: {(value / total) * 100}%;'></div>
  <div class={text}>{value} / {total}</div>
</div>
