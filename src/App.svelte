<script>
	// import gearSvg from './svg/animated/gear.svg';
	// import Button from './ui/button.svelte';
	// import Loader from './ui/full-page-loader.svelte';

	import IntroPage from './pages/intro.svelte';

	const onFilesLoaded = (files) => {
		console.log({ files });
	}
</script>

<style lang='stylus'>
	:global(body) {
		background: #393939;
	}

	:global(.intro-page) {
		flex: 1;
	}

	// :global(.btn) {
	// 	width: 100%;
	// }
	//
	// :global(.full-page-loader) {
	// 	position: absolute;
	// 	top: 0;
	// 	left: 0;
	// 	right: 0;
	// 	bottom: 0;
	// 	z-index: 9;
	// }

	:root {
		--shadow: #a0b4c1;
	}

	.app {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 15px;
	}

	// header {
	// 	display: flex;
	// 	justify-content: center;
	// 	border-bottom: 1px solid silver;
	// 	padding: 8px;
	// 	font-size: 10px;
	// 	flex: 0 0 auto;
	// 	background: silver;
	// }
	//
	// main {
	// 	flex: 1 1 auto;
	// 	display: flex;
	// 	align-items: center;
	// 	justify-content: center;
	// }
</style>

<!-- {#if loading}
	<Loader text='Parsing files' />
{/if} -->

<div class='app'>
	<IntroPage {onFilesLoaded} />
	<!-- {#if metas}
		<header>Found metadata from {metas.length} files</header>
	{/if}

	<main>
		<Button on:click={metadata}>
		  Go Fetch
		</Button>
	</main> -->
</div>
