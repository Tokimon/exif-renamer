import waitForPromise from './waitForPromise';

describe('shared/utils/waitForPromise', () => {
  const getKey = jest.fn(() => 'key');
  const callback = jest.fn(() => Promise.resolve('value'));
  const args = ['arg', 2, { b: true }];

  beforeEach(() => {
    getKey.mockClear();
    callback.mockClear();
  });

  test('Calls the given callback with the given arguments', async () => {
    const runPromise = waitForPromise({ getKey, callback });

    await runPromise(...args);

    expect(callback).toHaveBeenCalledWith(...args);
  });

  test('Only calls callback once per Promise resolution', async () => {
    const runPromise = waitForPromise({ getKey, callback });

    await Promise.all([runPromise(), runPromise(), runPromise()]);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('Always returns the current loading Promise', async () => {
    const runPromise = waitForPromise({ getKey, callback });

    const first = runPromise();
    const second = runPromise();
    const third = runPromise();

    expect(first).toBe(second);
    expect(second).toBe(third);

    expect(await first).toBe('value');
  });

  test('Caching depends on the string returned form the given Key Finder function', async () => {
    const dynamicKey = (num: number) => num;
    const runPromise = waitForPromise({ getKey: dynamicKey, callback });

    await Promise.all([runPromise(1), runPromise(1), runPromise(1), runPromise(2), runPromise(2), runPromise(2)]);

    expect(callback).toHaveBeenCalledTimes(2);
  });

  test('The given Key Finder function is passed all the arguments', () => {
    const runPromise = waitForPromise({ getKey, callback });

    runPromise(...args);

    expect(getKey).toHaveBeenCalledWith(...args);
  });

  test('Throws error when found key is an empty string', () => {
    const runPromise = waitForPromise({ getKey: () => '', callback });

    expect(() => runPromise()).toThrow();
  });

  test('Does not throw error when found key is zero', () => {
    const runPromise = waitForPromise({ getKey: () => 0, callback });

    expect(() => runPromise()).not.toThrow();
  });
});
