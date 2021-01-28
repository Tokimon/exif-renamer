import { createRequestHandler } from './handleRequest';

describe('server/requests/handleRequest', () => {
  const handler = jest.fn((payload) => Promise.resolve('payload: ' + payload));
  const loader = jest.fn(() => ({ default: handler }));
  const badLoader = jest.fn(() => { throw 'Failed to load'; });



  const goodCaller = createRequestHandler(loader);
  const badCaller = createRequestHandler(badLoader);

  const call = (caller: typeof goodCaller | typeof badCaller) =>
    (payload?: string, handler = 'testHandler') => caller({ handler, payload });

  const callGood = call(goodCaller);
  const callBad = call(badCaller);



  beforeEach(() => {
    handler.mockClear();
    loader.mockClear();
  });

  test('Loads the handler with the given name', () => {
    callGood();
    expect(loader).toHaveBeenCalledWith('./handlers/testHandler');
  });

  test('Calls the handler with the given payload', () => {
    callGood('payload');
    expect(handler).toHaveBeenCalledWith('payload');
  });

  test('Returns the return value of the handler', async () => {
    const value = await callGood('my value');
    expect(value).toBe('payload: my value');
  });

  test('Prevents loading the same handler if it still loading', () => {
    callGood('payload');
    callGood('payload');
    callGood('payload');

    expect(loader).toHaveBeenCalledTimes(1);
  });

  test('Can load two different handlers at the same time', () => {
    callGood('first');
    callGood('first');

    callGood('second', 'anotherHandler');
    callGood('second', 'anotherHandler');

    // The loader
    expect(loader).toHaveBeenCalledTimes(2);

    expect(loader).toHaveBeenNthCalledWith(1, './handlers/testHandler');
    expect(loader).toHaveBeenNthCalledWith(2, './handlers/anotherHandler');

    // The handler
    expect(handler).toHaveBeenCalledTimes(2);

    expect(handler).toHaveBeenNthCalledWith(1, 'first');
    expect(handler).toHaveBeenNthCalledWith(2, 'second');
  });

  test('Throws error when handler was not found', () => {
    expect(() => {
      callBad();
    });
  });
});
