<script context='module'>
  import Section from 'example-helpers/Section.svelte';

  import svg from 'ui/svg/icons/folder-search.svg';

  import MenuItem from './MenuItem.svelte';
</script>

<MenuItem icon={svg} on:click={() => alert('click')} style='width: 40px' />
