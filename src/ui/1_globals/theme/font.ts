import { injectGlobal } from '~/ui/1_globals/utils/css';


// Type exports
export type FontType = 'text' | 'headline';

export interface FontMapValue {
  size: number;
  family: string,
  string: string;
}

export interface FontVariableProps {
  type: FontType;
  size?: number;
  family?: string;
}





// Cache building
const fontString = (type: FontType) => {
  const sizeVar = `var(--size-${type})`;
  const familyVar = `var(--font-${type})`;

  return `font: ${sizeVar} ${familyVar};`;
};


const fonts = new Map<FontType, FontMapValue>([
  ['text', {
    size: 12,
    family: 'sans-serif',
    string: fontString('text')
  }],

  ['headline', {
    size: 30,
    family: 'sans-serif',
    string: fontString('headline')
  }],
]);





// High Level exports
export const fontSize = (num: number) => `${num / 10}rem`;

export const font = (type: FontType = 'text') => {
  const entry = fonts.get(type);
  return entry ? entry.string : '';
};

export const text = font('text');
export const headline = font('headline');

export const fontVariable = ({ type, size, family }: FontVariableProps): string => {
  if (!type) { return ''; }

  const vars: string[] = [];
  size && vars.push(`--size-${type}: ${fontSize(size)};`);
  family && vars.push(`--font-${type}: ${family};`);

  return vars.join('\n');
};


// Incjecting variables into the global space
const vars = Array.from(fonts.entries())
  .map(([type, { size, family }]) => fontVariable({ type, size, family }));


injectGlobal`
  :root {
    ${vars}
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${text}
  }
`;
