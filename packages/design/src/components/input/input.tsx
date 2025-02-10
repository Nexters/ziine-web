import { CSSProperties } from 'react';
import { inputStyle } from './input.styles';
import { css, cx } from '@/styled-system/css';
import { Typography } from '../typography';

interface Props {
  placeholder: string;
  textCntVisible: boolean;
  style?: CSSProperties;
}

export const Input = ({ placeholder, style, textCntVisible }: Props) => {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
      <input type='text' className={cx(inputStyle())} placeholder={placeholder} style={style}></input>
      {textCntVisible && (
        <Typography level='paragraph4' className={css({ color: 'grayscale.500', textAlign: 'end' })}>
          00/00
        </Typography>
      )}
    </div>
  );
};
