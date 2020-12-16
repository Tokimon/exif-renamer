const outDir = 'build/';
const sourceDir = 'src/';

export const out = (path) => `${outDir}${path}`;
export const src = (path) => `${sourceDir}${path}`;
export const production = false; // !process.env.ROLLUP_WATCH;
