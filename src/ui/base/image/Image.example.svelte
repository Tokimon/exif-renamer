<script>
	import { css } from 'emotion';
	import Section from 'example-helpers/Section.svelte';
	import Image from './Image.svelte';

	const src = 'https://placeimg.com/350/150/nature';
	const imgEx = css`
		width: 150px;
		height: 150px;
	`;
</script>

<Section title='Normal usage'>
  <Image class={imgEx} src={src} />
  <Image class={imgEx} />
</Section>

<Section title="Custom fit">
	<Image class={imgEx} src={src} fit='contain' />
	<Image class={imgEx} src={src} fit='fill' />
</Section>
