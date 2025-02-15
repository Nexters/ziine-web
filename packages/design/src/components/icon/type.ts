import type { ICON_NAMES, ICON_SIZE_MAP } from './meta';

export type IconSize = keyof typeof ICON_SIZE_MAP;

export type IconNames = (typeof ICON_NAMES)[number];
