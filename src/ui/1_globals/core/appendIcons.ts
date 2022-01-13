let loaded = false;

export default async () => {
  if (loaded) {
    return;
  }

  loaded = true;

  const { default: icons } = await import(
    '~/ui/0_assets/svg/inline/icons.svg?raw'
  );

  const html = icons.replace(
    '<svg',
    '<svg style="position:absolute;width:0;height:0"'
  );
  document.body.insertAdjacentHTML('afterbegin', html);
};
