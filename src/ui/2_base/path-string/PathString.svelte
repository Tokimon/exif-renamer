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
      color: var(--light-text);
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

<span class="path-string {className}" class:empty="{!endStr && !beginStr}" {style}>
  {#if beginStr}<span class="beginning">{beginStr}</span>{/if}
  {#if endStr}<span class="end">{separator + endStr}</span>{/if}
  {#if !endStr && !beginStr}<span class="end">{placeholder}</span>{/if}
</span>
