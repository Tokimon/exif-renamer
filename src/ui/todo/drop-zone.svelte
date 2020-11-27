<script lang="ts">
  import DropSvg from '../svg/static/folder.svg';

  const test = 0;
</script>

<style lang="stylus">
  .zone {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    background: rgba(108, 108, 108, 0.9);

    &::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      border: dashed 2px silver;
      border-radius: 10px;
    }
  }

  :global(svg) {
    width: 100px;
    height: 100px;
    fill: white;
  }

  .text {
    padding: 10px 0;
    text-transform: uppercase;
  }
</style>

<div class="zone drop-zone">
  {@html dropSvg}
  <div class="text">Drop folder here</div>
</div>
