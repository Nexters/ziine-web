import { CSSProperties } from 'react';
import { listTypeStyle } from './list-type.styles';
import { css, cx } from '@/styled-system/css';
import { Typography } from '../typography';
import { Input } from '../input';

interface Props {
  type: string;
  text: string;
  style?: CSSProperties;
  required: boolean;
  placeholder: string;
  description?: string;
  textCntVisible?: boolean;
}

export const ListType = ({
  type = 'oneRegister',
  text,
  required = true,
  style,
  placeholder,
  description,
  textCntVisible = true,
}: Props) => {
  return (
    <div className={cx(listTypeStyle(type))}>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        })}
        style={style}
      >
        <Typography level='subtitle3' className={css({ color: 'grayscale.0' })}>
          {text}
        </Typography>
        <Typography
          level='paragraph2'
          className={css({
            color: required ? 'error.500' : 'grayscale.600',
          })}
        >
          {required ? '*' : '(선택)'}
        </Typography>
      </div>
      {description && (
        <Typography
          level='paragraph3'
          className={css({
            color: 'grayscale.600',
            mb: '-2px',
          })}
        >
          {description}
        </Typography>
      )}

      <Input placeholder={placeholder} textCntVisible={textCntVisible}></Input>
    </div>
  );
};
