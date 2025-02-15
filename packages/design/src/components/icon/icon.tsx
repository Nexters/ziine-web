import { ColorToken, token } from 'styled-system/tokens';
import { type CSSProperties, type FunctionComponent, type SVGProps, Suspense, lazy } from 'react';

import type { IconSize, IconNames } from './type';
import { getIconSize } from './utils/getIconSize';
import { css } from 'styled-system/css';
import { ICON_NAMES } from './meta';

export interface IconProps {
  name: IconNames;
  size?: IconSize;
  color?: ColorToken | 'currentColor';
  className?: string;
  style?: CSSProperties;
}

const loadIcon = async (name: IconNames) => {
  try {
    try {
      return await import(`./assets/${name}.svg?react`);
    } catch {
      return await import(`./colorAssets/${name}.svg?react`);
    }
  } catch {
    console.warn(new Error(`SVG "${name}" not found in both assets and colorAssets`));
    return await Promise.resolve({ default: () => <div /> });
  }
}

const iconComponentMap = Object.fromEntries(
  ICON_NAMES.map((name) => [
    name,
    lazy<FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>>(() => loadIcon(name)),
  ]),
);

function Icon({ name, size = 'medium', color = 'currentColor', className, style }: IconProps) {
  const iconSize = getIconSize(size);

  const IconComponent = iconComponentMap[name];

  const isColorToken = color !== 'currentColor';

  return (
    <div className={css({ display: 'inline-block' })} style={{ width: iconSize, height: iconSize }}>
      <Suspense fallback={<div />}>
        <IconComponent
          width={iconSize}
          height={iconSize}
          className={className}
          style={{
            fill: isColorToken ? token(`colors.${color}`) : color,
            ...style,
          }}
        />
      </Suspense>
    </div>
  );
}

export default Icon;
