<script lang="ts">
  import fileExtension from '~/ui/1_globals/utils/fileExtension';
  import fileName from '~/ui/1_globals/utils/fileName';
  import extensionToIcon from '~/ui/1_globals/core/extensionToIcon';

  import Image from '~/ui/2_base/image/Image.svelte';
  import FocusDot from '~/ui/2_base/focus-dot/FocusDot.svelte';
  import PathString from '~/ui/2_base/path-string/PathString.svelte';

  import { container, dot, image, checkbox } from './FileTile.style';

  export let path: string = '';
  export let thumbnail: string = '';
  export let count: number = 1;

  let extension = '';
  let noImageIcon: string | null = null;
  let src = '';
  let name = '';

  $: {
    src = thumbnail || path;
    extension = fileExtension(path);
    noImageIcon = extensionToIcon(extension);
    name = fileName(path);
  }
</script>

<label class={container} data-title={path}>
  <input type="checkbox" class={checkbox} />

  <div class={image}>
    <Image {src} {extension} {noImageIcon} />

    {#if count > 1}
      <FocusDot className={dot}>{count}</FocusDot>
    {/if}
  </div>

  <PathString path={name} seperator="." />
</label>
