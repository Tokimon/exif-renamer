// globals: __electron__

import { setContext } from 'svelte';



import App from '~/App.svelte';


setContext('electron', __electron__);


const app = new App({
  target: document.body,
  props: {}
});

export default app;
