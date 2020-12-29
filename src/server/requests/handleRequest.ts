import { ipcMain } from 'electron';


interface RequestHandler {
  default: (payload: any) => Promise<any>,
  [key: string]: any;
}


export const handleRequest = () =>
  ipcMain.handle('request', async (_, { type, payload }) => {
    const { default: cb } = await require(`./handlers/${type}`) as RequestHandler;
    return cb(payload);
  });
