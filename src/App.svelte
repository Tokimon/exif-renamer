<script>
	import FilesPage from 'ui/pages/files/Files.svelte';
	import LoadingPage from 'ui/pages/loading-page/LoadingPage.svelte';

	let loading = false;
	let paths = [];
</script>

{#if loading}
	<LoadingPage>Parsing files</LoadingPage>
{:else}
	<FilesPage paths={} />
{/if}
