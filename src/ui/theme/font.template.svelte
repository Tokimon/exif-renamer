<script lang="ts">
  import { css } from '~/ui/utils/css';

  import { font } from './font';

  export let type = 'text';

  const fontStr = font(type);
  const cn = css`
    ${fontStr}
  `;
</script>

<div class={cn}>The quick brown fox jumped over the lazy dog</div>
