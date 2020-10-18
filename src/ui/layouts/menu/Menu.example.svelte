<script lang="typescript">
  import Menu from './Menu.svelte';

  const loadPath = () => alert('loading path');
</script>

<Menu {loadPath} />
