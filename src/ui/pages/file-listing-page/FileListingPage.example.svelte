<script context='module'>
  import FileListingPage from './FileListingPage.svelte';

  const types = ['animals', 'nature', 'arch', 'people', 'tech'];

  const m = {};

  const paths = Array.from(
    Array(20000),
    (_, i) => {
      const path = 'https://placeimg.com/150/150/' + types[Math.round(Math.random() * 4)];
      m[path] = (m[path] || 0) + 1;
      return path + (m[path] > 1 ? '_' + m[path] : '');
    }
  );
</script>

<FileListingPage paths={paths} />
