// import { setContext, getContext } from 'svelte';

import type { ServerActionRecord } from '~/types/serverActions.d';



declare global {
  interface Window {
    server: ServerActionRecord;
  }
}


// TODO: This has to be more connected to the store, so I cannot do a 1-to-1 mapping of the sersver functions
// data comming to and from the server has to be stored in the store as well

export const getActions = (): ServerActionRecord => window.server;

// export const initServerActions = (): void => setContext('server', window.server);

// export const serverActions = (): ServerActionRecord => getContext('server');