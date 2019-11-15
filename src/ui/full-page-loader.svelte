<script>
  import gearSvg from '../svg/animated/gear.svg';

  export let text;
</script>

<style>
  :global(.full-page-loader) {}

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(56, 56, 56, 0.9);
    color: white;
  }

  .gear {
    width: 70px;
    height: 70px;
    fill: white;
  }

  .text {
    font-size: 16px;
    padding: 10px 0;
  }
</style>

<div class="full-page-loader container">
  <div class='gear'>{@html gearSvg}</div>
  {#if text}<div class='text'>{text}</div>{/if}
</div>
