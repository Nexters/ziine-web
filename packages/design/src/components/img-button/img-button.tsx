import { CSSProperties } from 'react';
import { imgButtonStyle } from './img-button.styles';
import { css, cx } from '@/styled-system/css';
import { Typography } from '../typography';

interface Props {
  text: string;
  style?: CSSProperties;
}

export const ImgButton = ({ text, style }: Props) => {
  return (
    <div className={cx(imgButtonStyle())} style={style}>
      <Typography level='paragraph3'>
        {text}
      </Typography>
    </div>
  );
};
