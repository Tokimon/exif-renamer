<script lang="ts">
  import { css } from '~/ui/utils/css';

  import { text } from './text';

  const p = css`
    ${text}
  `;
</script>

<p class={p}>The quick brown fox jumped over the lazy dog</p>
