import Color from 'color';

export const colors = {
  primary: '#2ba0bc',
  secondary: '#84af1b',
  danger: '#c61616',
  caution: '#ffd43c',
  valid: '#67cc02',
  text: '#666b6a'
};

export const color = (_color: string, alpha?: number): string => {
  const clr = colors[_color] || _color;
  if (!clr || !alpha) { return clr; }

  return Color(clr)
    .alpha(alpha / 100)
    .rgb()
    .string();
};

export const whiten = (_color: string, pct: number): string => {
  return Color(color(_color))
    .mix(Color('white'), pct / 100)
    .hex();
};

export const blacken = (_color: string, pct: number): string => {
  return Color(color(_color))
    .mix(Color('black'), pct / 100)
    .hex();
};

export default colors;
