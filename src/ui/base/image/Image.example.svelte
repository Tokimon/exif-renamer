<script lang="typescript">
  import { css } from 'emotion';

  import Section from '~/ui/example-helpers/Section.svelte';

  import Image from './Image.svelte';

  const src = 'https://placeimg.com/350/150/nature';
  const imgClassName = css`
    width: 150px;
    height: 150px;
  `;
</script>

<Section title="Normal usage">
  <Image class={imgClassName} {src} />
  <Image class={imgClassName} />
</Section>

<Section title="Custom fit">
  <Image class={imgClassName} {src} fit="contain" />
  <Image class={imgClassName} {src} fit="fill" />
</Section>
