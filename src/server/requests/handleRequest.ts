import { ipcMain } from 'electron';

import waitForPromise from '~/shared/utils/waitForPromise';



type RequestHandler = (payload?: any) => Promise<any>;

interface RequestHandlerModule {
  default: RequestHandler,
  [key: string]: any;
}

interface Action {
  handler: string,
  payload?: any;
}

type HandlerInvoker = (action: Action) => Promise<any>;
type HandlerModuleLoader = (path?: string) => RequestHandlerModule;
type HandlerLoader = NodeRequire | HandlerModuleLoader;



const loadRequestHandler = (handler: string, load: HandlerLoader): RequestHandler => {
  let cb;

  try {
    const h = load(`./handlers/${handler}`) as RequestHandlerModule;
    cb = h.default;
  } catch (error) {
    error.message = `Failed to load request handler "${handler}"`;
    throw error;
  }

  if (!cb) {
    throw new Error(`Request handler: "${handler}" - did not "default" export a function`);
  }

  return cb;
};

const loader = (load: HandlerLoader): HandlerInvoker =>
  async ({ handler, payload }) => {
    const requestHandler = loadRequestHandler(handler, load);

    try {
      return await requestHandler(payload);
    } catch (error) {
      error.message = `Request handler: "${handler}" - Failed`;
      throw error;
    }
  };



export const createRequestHandler = (load: HandlerLoader = require): HandlerInvoker =>
  waitForPromise({
    getKey: (a: Action) => a.handler,
    callback: loader(load)
  });


const requestHandler = createRequestHandler();

export const handleRequest = () =>
  ipcMain.handle('request', (_, action: Action) => requestHandler(action));
