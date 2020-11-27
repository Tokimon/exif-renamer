<script lang="ts">
  import FilesPage from '~/ui/pages/files/Files.svelte';
  import LoadingPage from '~/ui/pages/loading-page/LoadingPage.svelte';

  const loading = false;
  const paths = [];
</script>

{#if loading}
  <LoadingPage>Parsing files</LoadingPage>
{:else}
  <FilesPage {paths} />
{/if}
