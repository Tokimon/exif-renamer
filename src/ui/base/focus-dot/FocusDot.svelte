<script>
  import { css, cx } from 'emotion';

  import { text } from 'ui/theme/text';
  import colors from 'ui/theme/colors';

  const { class: className, ...rest } = $$restProps;

  const container = css`
    ${text}
    font-size: 10px;
    border-radius: 8px;
    height: 16px;
    min-width: 16px;
    line-height: 16px;
    padding: 0 4px;
    color: ${colors.text};
    background: ${colors.secondary};
    display: inline-block;
    box-sizing: border-box;
  `;
</script>

<div class={cx(container, className)} {...rest}><slot /></div>
