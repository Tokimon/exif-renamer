<script lang="ts">
  import NameInput from '~/ui/3_pieces/name-input/NameInput.svelte';
  import AlbumListHeader from '~/ui/4_components/album-list-header/AlbumListHeader.svelte';
  import AlbumListItem from '~/ui/4_components/album-list-item/AlbumListItem.svelte';

  let albums: string[] = [];
  let newEntry = false;
  let newAlbumInput: HTMLInputElement | null = null;

  const onAddAlbum = () => {
    newEntry = true;
    requestAnimationFrame(() => newAlbumInput?.focus());
  };

  function addToAlbums(name: string) {
    albums = [...albums, name];
  }

  function onSaveAlbum(e: CustomEvent) {
    if (!e.detail.name) return;
    addToAlbums(e.detail.name);
    newEntry = false;
  }

  function updateAlbumName(e: CustomEvent) {
    const { name, oldName } = e.detail;
    albums = albums.map((album) => (album === oldName ? name : album));
  }

  function removeAlbum(e: CustomEvent) {
    albums = albums.filter((album) => album !== e.detail);
  }
</script>

<AlbumListHeader on:add-album="{onAddAlbum}" />

{#if newEntry}
  <NameInput bind:input="{newAlbumInput}" on:change="{onSaveAlbum}" names="{albums}" placeholder="Give album a unique name" />
{/if}

{#each albums.sort() as album}
  <AlbumListItem name="{album}" on:name-update="{updateAlbumName}" on:delete="{removeAlbum}" />
{/each}
