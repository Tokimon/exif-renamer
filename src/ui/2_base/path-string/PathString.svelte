<script lang="ts">
  import stringEndSplit from '~/ui/1_globals/utils/stringEndSplit';

  export let path: string = '';
  export let separator: string = '/';
  export let placeholder: string = 'No path ...';
  export let className: string = '';
  export let style: string = '';

  let endStr: string = '';
  let beginStr: string = '';

  $: [beginStr, endStr] = stringEndSplit(path, separator);
</script>

<style>
  .path-string {
    white-space: nowrap;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;

    &.empty {
      color: color-mix(in oklch, var(--text) 25% white);
    }
  }

  .beginning {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .end {
    flex: 0;
  }
</style>

<span class="path-string {className}" class:empty="{!endStr}" {style}>
  {#if beginStr}<span class="beginning">{beginStr}</span>{/if}
  <span class="end">{endStr ? separator + endStr : placeholder}</span>
</span>
