<script lang="ts">
  import FilesPage from './FilesPage.svelte';

  const types = ['animals', 'nature', 'arch', 'people', 'tech'];

  const m: Record<string, number> = {};

  const paths = Array.from(Array(20000), () => {
    const imageType = types[Math.round(Math.random() * 4)];
    const path = 'https://placeimg.com/150/150/' + imageType;
    m[path] = (m[path] || 0) + 1;
    return path + (m[path] > 1 ? '_' + m[path] : '');
  });
</script>

<FilesPage {paths} />
