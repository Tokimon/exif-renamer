export const ColorNames = ['primary', 'secondary', 'danger', 'caution', 'valid', 'light-text', 'dark-text'] as const;

export type Colors = (typeof ColorNames)[number];
