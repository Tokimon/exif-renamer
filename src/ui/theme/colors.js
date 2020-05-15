import Color from 'color'

export const colors = {
  primary: '#2ba0bc',
  secondary: '#c2e812',
  danger: '#c61616',
  caution: '#ffd43c',
  valid: '#67cc02',
  text: '#666b6a'
};

export const pickColor = (color, alpha) => {
  const clr = colors[color] || color;
  if (!clr || !alpha) { return clr; }

  return Color(clr)
    .alpha(alpha / 100)
    .rgb()
    .string();
}

export const whiten = (color, pct) => {
  return Color(pickColor(color))
    .mix(Color('white'), pct / 100)
    .hex();
}

export const blacken = (color, pct) => {
  return Color(pickColor(color))
    .mix(Color('black'), pct / 100)
    .hex();
}

export default colors;
