import { ipcMain } from 'electron';

import waitForPromise from '~/shared/utils/waitForPromise';



interface RequestHandler {
  default: (payload: any) => Promise<any>,
  [key: string]: any;
}

interface Action {
  handler: string,
  payload?: any;
}

type HandlerInvoker = (action: Action) => Promise<any>;
type HandlerModuleLoader = (path: string) => RequestHandler;



const waitForHandler = waitForPromise((a: Action) => a.handler);



const loader = (load: NodeRequire | HandlerModuleLoader): HandlerInvoker =>
  ({ handler, payload }) => {
    let cb;

    try {
      const h = load(`./handlers/${handler}`) as RequestHandler;
      cb = h.default;
    } catch (error) {
      error.message = `Failed to load request handler "${handler}"`;
      throw error;
    }

    if (!cb) {
      throw new Error(`Request handler: "${handler}" - did not default export a function`);
    }

    return cb(payload)
      .catch((error) => {
        error.message = `Request handler: "${handler}" - Failed`;
        throw error;
      });
  };

export const loadRequestHandler = (load: NodeRequire | HandlerModuleLoader = require) => {
  return waitForHandler(loader(load));
};


const handlerRequester = loadRequestHandler();

export const handleRequest = () =>
  ipcMain.handle('request', (_, action: Action) => handlerRequester(action));
