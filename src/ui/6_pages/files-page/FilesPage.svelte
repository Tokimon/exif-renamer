<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { FileInfo } from '~/types/file';
  import { fileInfoStore, selectedFileStore } from '~/ui/1_globals/stores/fileInfoStore';
  import Button from '~/ui/2_base/button/Button.svelte';
  import FocusDot from '~/ui/2_base/focus-dot/FocusDot.svelte';
  import DirectoryDisplay from '~/ui/3_pieces/directory-display/DirectoryDisplay.svelte';
  import FileList from '~/ui/4_components/file-list/FileList.svelte';
  import ZoomLevel from '~/ui/4_components/zoom-level/ZoomLevel.svelte';

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
  }

  nav {
    grid-area: actions;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 1.3rem;
    background: #efefef;
  }

  footer {
    border-top: 1px solid #d7d7d7;
    grid-area: footer;
    display: grid;
    grid-template-columns: subgrid;
  }

  .trash {
    grid-column: 3;
    display: grid;

    & > * {
      grid-area: 1 / 1;
    }
  }

  :global(.dir) {
    font-size: 2rem;
    grid-column: span 2 / 1;
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

  .albums {
    display: grid;
    grid-template-columns: repeat(auto-fit, 45px);
    gap: 1rem;
    padding: 1rem;
    justify-content: center;
  }
</style>

<div class="page">
  <main>
    <menu class="toolbar">
      <ZoomLevel />

      <Button icon="edit" color="valid" />
      <Button icon="trash" color="danger" />
    </menu>

    <FileList />
  </main>

  <aside>
    <div class="albums">
      <h2 style="grid-area: 1 / span 4;">Albums</h2>
      <Button icon="folder" className="action" color="text" />
      <Button icon="folder" className="action" color="text" />
      <Button icon="folder" className="action" color="text" />
      <Button icon="folder" className="action" color="text" />
      <Button icon="folder" className="action" color="text" />
      <Button icon="folder" className="action" color="text" />
      <Button icon="folder" className="action" color="text" />
    </div>
  </aside>

  <nav>
    <Button icon="folder" className="action" color="text" />
    <Button icon="calendar" className="action" color="text" />
    <Button icon="filter" className="action" color="text" />
    <Button icon="play" className="action" color="text" />
  </nav>

  <footer>
    <DirectoryDisplay
      className="dir"
      path="path/to/some/strange/image/folder"
      count="{$fileInfoStore.length}"
      on:click="{() => dispatch('dir-click')}"
    />

    <div class="trash">
      <Button icon="trash" className="action" color="text" disabled="{!deleteCount}" style="padding: 1.5rem;" />
      {#if deleteCount}
        <FocusDot className="trash-count" style="z-index: 1; place-self: end start; translate: 50% -50%;">
          {deleteCount}
        </FocusDot>
      {/if}
    </div>
  </footer>

  <!-- <FileFilterBar style="grid-column: 1" />

  <FileList style="grid-column: 1" />

  <aside>
    {#if selectedFiles.length}
      <div class="drawer" transition:slide="{{ axis: 'x', duration: 200 }}">
        <FileEditPanel files="{selectedFiles}" style="flex: 0 0 auto; width: 28rem;" />
      </div>
    {/if}
  </aside> -->
</div>
