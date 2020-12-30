import { injectGlobal } from '~/ui/utils/css';


// Type exports
export enum FontTypes {
  text,
  headline
}

export interface FontVariableProps {
  type: FontTypes;
  size?: number;
  family?: string;
}





// Cache building
const fontString = (type: FontTypes) => {
  const typeStr: string = FontTypes[type];
  const sizeVar = `var(--size-${typeStr})`;
  const familyVar = `var(--font-${typeStr})`;

  const str = `font: ${sizeVar} ${familyVar};`;

  Object.defineProperty(str, 'size', {
    value: `font-size: ${sizeVar};`,
    writable: false,
    enumerable: true
  });

  Object.defineProperty(str, 'family', {
    value: `font-size: ${familyVar};`,
    writable: false,
    enumerable: true
  });

  return str;
};

const fonts = new Map([
  [FontTypes.text, {
    size: 12,
    family: 'sans-serif',
    string: fontString(FontTypes.text)
  }],

  [FontTypes.headline, {
    size: 30,
    family: 'sans-serif',
    string: fontString(FontTypes.headline)
  }],
]);





// High Level exports
export const fontSize = (num: number) => `${num / 10}rem`;

export const font = (type = FontTypes.text) => {
  const entry = fonts.get(type);
  return entry ? entry.string : '';
};

export const text = font(FontTypes.text);
export const headline = font(FontTypes.headline);

export const fontVariable = ({ type, size, family }: FontVariableProps): string => {
  if (!type) { return ''; }

  const vars: string[] = [];
  size && vars.push(`--size-${FontTypes[type]}: ${fontSize(size)};`);
  family && vars.push(`--font-${FontTypes[type]}: ${family};`);

  return vars.join('\n');
};


// Incjecting variables into the global space
const vars = Array.from(fonts.entries())
  .map(([type, { size, family }]) => fontVariable({ type, size, family }));


injectGlobal`
  :root {
    ${vars}
  }

  body {
    ${text}
  }
`;
