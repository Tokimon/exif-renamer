<script lang="ts">
  export let title = '';
  export let className = '';
  export let style = '';
</script>

<style>
  label {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;

    & > input {
      padding: 0.5rem 1rem;
      border: 1px solid lightgray;
      border-radius: 0.4rem;
      height: 1.8rem;
      font-size: inherit;

      &:focus {
        outline: none;
        border-color: var(--primary);
      }
    }
  }

  .input-title {
    padding: 0 1rem;
    font-weight: bolder;
    margin: 0;
    flex: 1 1 100%;
  }
</style>

<label class="{className}" {style}>
  {#if title}<p class="input-title">{title}</p>{/if}
  <slot />
</label>
