<script lang="ts">
  import { css } from '~/ui/utils/css';

  import { font, FontType } from './font';

  export let type: FontType = 'text';
  export let text = 'My text';

  const fontStr = font(type);
  const cn = css`
    ${fontStr}
  `;
</script>

<div class={cn}>{text}</div>
