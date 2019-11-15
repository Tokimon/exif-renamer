import * as childProcess from 'child_process';

let isRunning = false;

export default {
  writeBundle() {
    if (!isRunning) {
      isRunning = true;
      childProcess.spawn('npm', ['run', 'serve:dev'], { stdio: ['ignore', 'inherit', 'inherit'], shell: true });
    }
  }
};
