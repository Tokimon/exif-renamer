<script lang="ts">
  import LoadingOverlay from './LoadingOverlay.svelte';

  export let text = '';
</script>

<LoadingOverlay>{text}</LoadingOverlay>
