<script lang="ts">
  import { root, menuPane, contentPane } from './PageLayout.style';
</script>

<div class={root}>
  <div class={menuPane}>
    <slot name="menu" />
  </div>
  <main class={contentPane}>
    <slot name="content" />
  </main>
</div>
