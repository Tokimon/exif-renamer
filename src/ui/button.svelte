<style lang="stylus">
  bg = #34ab6a;

  :global(.btn) {}

  .button {
    padding: 0 10px;
    height: 30px;
    box-shadow: 0 0 5px var(--shadow);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: bg;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-size: 12px;

    &:hover {
      background: lightness(bg, 50%);
      text-decoration: none;
    }
  }
</style>

<a class='btn button' on:click>
  <slot />
</a>
