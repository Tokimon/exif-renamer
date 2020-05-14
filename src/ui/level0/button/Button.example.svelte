<script>
	import Section from 'example-helpers/Section.svelte';
	import Button from './Button.svelte';

const onClick = () => alert('clicked');
</script>

<Section title="Normal">
  <Button on:click={onClick}>Normal</Button>
  <Button on:click={onClick} disabled>Disabled</Button>
</Section>

<Section title="Custom Color">
  <Button on:click={onClick} color='#dabf4b'>Customized</Button>
  <Button on:click={onClick} color='#dabf4b' disabled>Disabled</Button>
</Section>
