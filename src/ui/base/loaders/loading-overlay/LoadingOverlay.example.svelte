<script>
	import Section from 'example-helpers/Section.svelte';

	import LoadingOverlay from './LoadingOverlay.svelte';

  const style = 'width: 200px; height: 200px; margin: 15px;'
</script>

<Section>
  <LoadingOverlay style={style} />
  <LoadingOverlay style={style}>Loading</LoadingOverlay>
</Section>
