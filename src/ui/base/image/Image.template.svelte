<script lang="typescript">
  import Image from './Image.svelte';

  const rest = $$restProps;
  const style = 'width: 200px; height: 200px;';
</script>

<Image {style} {...rest} />
