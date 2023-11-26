<script lang="ts">
  import { minMax } from '@jsfns/core/minMax';
  import { off } from '@jsfns/web/off';
  import { on } from '@jsfns/web/on';
  import { onMount } from 'svelte';
  import zoomStore from '~/ui/1_globals/stores/zoomStore';

  const pctMin = 50;
  const pctMax = 300;

  onMount(() => {
    const handleZoom = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        $zoomStore = minMax(e.deltaY < 0 ? $zoomStore + 10 : $zoomStore - 10, pctMin, pctMax);
      }
    };

    on('mousewheel', handleZoom, { passive: false });

    return () => off('mousewheel', handleZoom);
  });
</script>

<style>
  .bg {
    translate: 0 0;
    grid-area: 1 / 2;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: 0 solid transparent;
      border-bottom-color: gray;
      border-width: 0 0 var(--h) var(--w);
    }
  }

  input {
    appearance: none;
    margin: 0;
    grid-area: 1 / 2;

    &::-webkit-slider-thumb {
      width: 8px;
      height: var(--h);
      /* background: oklch(from var(--secondary) 0.9 0.09 h); */
      background: white;
      border-radius: 2px;
      cursor: pointer;
      appearance: none;
      translate: 0 0;
      box-shadow: 0 0 0 1px oklch(from var(--secondary) 0.6 c h);
    }

    &::-webkit-slider-runnable-track {
      height: var(--h);
    }
  }

  .zoom-level {
    --w: 60px;
    --h: 14px;

    align-self: center;
    display: grid;
    grid-template-columns: 6px var(--w) 8px;
    grid-template-rows: var(--h);
    gap: 4px;
    align-items: end;

    &::before,
    &::after {
      content: '';
      background: lightgray;
      border-radius: 2px;
      box-shadow: 0 0 0 1px gray;
    }

    &::before {
      grid-area: 1 / 1;
      aspect-ratio: 1 / 1;
    }

    &::after {
      grid-area: 1 / 3;
      height: var(--h);
    }
  }
</style>

<div class="zoom-level">
  <span class="bg"></span>
  <input type="range" min="{pctMin}" max="{pctMax}" step="1" bind:value="{$zoomStore}" />
</div>
