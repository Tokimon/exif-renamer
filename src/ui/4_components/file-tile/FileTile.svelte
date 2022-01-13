<script lang="ts">
  import extensionToIcon from '~/ui/1_globals/core/extensionToIcon';
  import fileExtension from '~/ui/1_globals/utils/fileExtension';
  import FocusDot from '~/ui/2_base/focus-dot/FocusDot.svelte';
  import Image from '~/ui/2_base/image/Image.svelte';
  import PathString from '~/ui/2_base/path-string/PathString.svelte';
  import { checkbox,container,dot,image } from './FileTile.style';

  export let name: string = '';
  export let thumbnail: string = '';
  export let count: number = 1;

  let extension = '';
  let noImageIcon: string | undefined;

  $: {
    extension = fileExtension(name);
    noImageIcon = extensionToIcon(extension);
  }
</script>

<label class={container} title={name}>
  <input type="checkbox" class={checkbox} />

  <div class={image}>
    <Image src={thumbnail} {extension} {noImageIcon} />

    {#if count > 1}
      <FocusDot className={dot}>{count}</FocusDot>
    {/if}
  </div>

  <PathString path={name} seperator="." />
</label>
