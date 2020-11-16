<script context='module'>
  import FileList from './FileList.svelte';

  const types = ['animals', 'nature', 'arch', 'people', 'tech'];
  const paths = Array.from(Array(50), (_, i) => [
    'https://placeimg.com/150/150/' + types[Math.round(Math.random() * 4)],
    Math.round(Math.random() * 20)
  ]);
</script>

<FileList paths={paths} />
