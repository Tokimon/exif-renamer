import { ipcMain } from 'electron';


interface RequestHandler {
  default: (payload: any) => Promise<any>,
  [key: string]: any;
}


const loading = new Set() as Set<string>;

export const handleRequest = () =>
  ipcMain.handle('request', async (_, { type, payload }) => {
    if (loading.has(type)) { return; }

    loading.add(type);

    const { default: cb } = require(`./handlers/${type}`) as RequestHandler;
    const value = await cb(payload);

    loading.delete(type);

    return value;
  });
