<script lang="typescript">
	import Section from 'example-helpers/Section.svelte';
	import Button from './Button.svelte';

	const onClick = () => alert('clicked');
	const href = 'https://developer.mozilla.org/en-US/';
</script>

<Section title="With click event">
  <Button on:click={onClick}>Normal</Button>
  <Button on:click={onClick} disabled>Disabled on click</Button>
</Section>

<Section title="With href">
	<Button href={href} target='_blank'>Opens MDN</Button>
	<Button href={href} disabled>Disabled href</Button>
</Section>

<Section title="Custom Color">
  <Button on:click={onClick} color='secondary'>Customized</Button>
  <Button on:click={onClick} color='secondary' disabled>Disabled</Button>
</Section>
