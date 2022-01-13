type KeyFinder = (...args: any[]) => string | number;
type PromiseInvoker = (...args: any[]) => Promise<any>;

interface WaitForPromiseConstructorProps {
  getKey: KeyFinder,
  callback: PromiseInvoker;
}


export const _loading = new Map() as Map<string | number, Promise<any>>;



export default ({ getKey, callback }: WaitForPromiseConstructorProps) =>
  (...args: any[]): Promise<any> => {
    const key = getKey(...args);
    if (key === '') { throw new Error('waitForPromise: Key cannot be an empty string'); }

    let prom = _loading.get(key);
    if (prom) { return prom; }

    prom = callback(...args).finally(() => _loading.delete(key));
    _loading.set(key, prom);

    return prom;
  };