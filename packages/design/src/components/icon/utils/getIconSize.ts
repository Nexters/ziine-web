import { ICON_SIZE_MAP } from '../meta';
import type { IconSize } from '../type';

export function getIconSize(size: IconSize | number) {
  return typeof size === 'number' ? size + 'px' : ICON_SIZE_MAP[size];
}
