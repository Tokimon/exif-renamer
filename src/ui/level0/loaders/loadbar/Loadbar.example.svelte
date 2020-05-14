<script>
	import Loadbar from './Loadbar.svelte';

	$: value = 0;
</script>

<Loadbar value={value} total={100} style='margin-bottom: 10px;' />

<button type='button' on:click={() => value = 0}>0%</button>
<button type='button' on:click={() => value = 50}>50%</button>
<button type='button' on:click={() => value = 100}>100%</button>
