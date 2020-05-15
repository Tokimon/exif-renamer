<script context='module'>
  import Section from 'example-helpers/Section.svelte';

  import Thumb from './Thumb.svelte';

  const src = 'https://placeimg.com/150/150/nature';
</script>

<Section>
  <Thumb src={src} />
  <Thumb src={src} count={88} />
  <Thumb count={88} />
</Section>
