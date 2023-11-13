export const ColorNames = ['primary', 'secondary', 'danger', 'caution', 'valid', 'text'] as const;

export type Colors = (typeof ColorNames)[number];
