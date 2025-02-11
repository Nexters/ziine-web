import { cx } from '@/styled-system/css';
import { dividerStyle } from './divider.styles';

export const Divider = () => {
  return <div className={cx(dividerStyle())}></div>;
};
