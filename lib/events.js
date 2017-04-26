const events = new Map();

function register(name, handler) {
  if(typeof handler !== 'function') { return; }

  const handlers = events.get(name) || [];
  handlers.push(handler);
  events.set(name, handlers);
}

function trigger(name, data) {
  if(!events.has(name)) { return; }
  return events.get(name).every((handler) => handler(data) !== false);
}

module.exports = {
  register,
  trigger,
  START: 'start',
  FINISH: 'finish',
  FOLDER: 'folder',
  LOADING_FILES: 'loadingfiles',
  FILES_FOUND: 'filefound',
  FILE_RENAMED: 'filerenamed',
  FILE_SKIPPED: 'fileskipped',
  NO_FILES: 'nofiles',
  IGNORED_EXT: 'ignoredext',
  ERROR: 'error'
};
