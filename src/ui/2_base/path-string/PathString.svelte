<script lang="ts">
  import classnames from 'classnames';

  import stringEndSplit from '~/ui/1_globals/utils/stringEndSplit';

  import { container, beginning, end, empty } from './PathString.style';

  export let path: string = '';
  export let seperator: string = '/';
  export let placeholder: string = 'No path ...';
  export let className: string = '';
  export let style: string = '';

  let endStr: string = '';
  let beginStr: string = '';

  $: {
    [beginStr, endStr] = stringEndSplit(path, seperator);
  }
</script>

<span class={classnames(container, className, { [empty]: !endStr })} {style}>
  {#if beginStr}<span class={beginning}>{beginStr}</span>{/if}
  <span class={end}>{endStr ? seperator + endStr : placeholder}</span>
</span>
