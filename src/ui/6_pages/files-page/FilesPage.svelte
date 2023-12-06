<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { FileInfo } from '~/types/file';
  import { fileInfoStore, selectedFileStore } from '~/ui/1_globals/stores/fileInfoStore';
  import Button from '~/ui/2_base/button/Button.svelte';
  import DirectoryDisplay from '~/ui/3_pieces/directory-display/DirectoryDisplay.svelte';
  import NavButton from '~/ui/3_pieces/nav-button/NavButton.svelte';
  import TrashButton from '~/ui/3_pieces/trash-button/TrashButton.svelte';
  import FileList from '~/ui/4_components/file-list/FileList.svelte';
  import ZoomLevel from '~/ui/4_components/zoom-level/ZoomLevel.svelte';
  import PanelAlbums from '~/ui/5_page-parts/panel-albums/PanelAlbums.svelte';

  const dispatch = createEventDispatcher();

  let selectCount = 0;
  let selectedFiles: FileInfo[] = [];
  $: selectedFiles = $fileInfoStore.filter(({ name }) => $selectedFileStore.has(name));
  $: selectCount = selectedFiles.length;

  let deleteCount = 99;
</script>

<style>
  .page {
    height: 100dvh;
    display: grid;
    grid-template-columns: 1fr auto 5.8rem;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'content panel actions'
      'footer footer footer';
  }

  .toolbar {
    --bg: #fff;

    position: sticky;
    inset: 0 auto auto 0;
    z-index: 9;
    display: flex;
    gap: 1rem;
    background: var(--bg);
    margin: 0;
    padding: 0.5rem 1.5rem 0.5rem 1rem;
    width: fit-content;
    border-radius: 0 0 1.5rem 0;
    transition: filter 1s ease-out;
    filter: drop-shadow(0 0 6px lightgray);

    &::after {
      content: '';
      position: absolute;
      inset: 0px auto 1.55rem 100%;
      background: transparent;
      border-radius: 100% 0 0 0;
      aspect-ratio: 1;
      box-shadow: -10px -10px 0 10px var(--bg);
      z-index: -1;
    }

    & > .button {
      padding: 0.5rem;

      & .svg-icon {
        width: 1.2rem;
      }
    }
  }

  main {
    grid-area: content;
    overflow: auto;
    position: relative;
    background: #cdcdcd;
  }

  aside {
    grid-area: panel;
    width: 250px;
    background: darkgray;
    box-shadow: inset 3px 1px 6px #979797;
    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  nav {
    grid-area: actions;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 2rem;
    padding: 1.3rem 0.5rem;
    background: #efefef;
  }

  footer {
    border-top: 1px solid #d7d7d7;
    grid-area: footer;
    display: grid;
    grid-template-columns: subgrid;
  }

  :global(.action.button) {
    aspect-ratio: 1;
    padding: 0;
    color: var(--color);
    background: transparent;
    flex: 0 1 auto;

    & .svg-icon {
      width: auto;
      flex: 1 1 auto;
    }
  }
</style>

<div class="page">
  <main>
    <menu class="toolbar">
      <ZoomLevel />
    </menu>

    <FileList />
  </main>

  <aside>
    <PanelAlbums />
  </aside>

  <nav>
    <NavButton icon="play">Actions</NavButton>
    <NavButton icon="folder">Albums</NavButton>
    <NavButton icon="filter">Filter results</NavButton>
  </nav>

  <footer>
    <DirectoryDisplay
      style="font-size: 2rem; grid-column: span 2 / 1;"
      path="path/to/some/strange/image/folder"
      count="{$fileInfoStore.length}"
      on:click="{() => dispatch('dir-click')}"
    />

    <TrashButton style="grid-column: 3; margin: 0.5rem;" />
  </footer>
</div>
