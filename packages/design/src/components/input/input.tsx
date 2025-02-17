import { inputFatStyle, inputStyle } from './input.styles';
import { css, cx } from '@/styled-system/css';
import { Typography } from '../typography';
import { ChangeEvent, CSSProperties } from 'react';

interface InputProps {
  placeholder: string;
  textCntVisible: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
}

export const Input = ({ placeholder, textCntVisible, value, onChange }: InputProps) => {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' })}>
      <input type='text' className={cx(inputStyle())} placeholder={placeholder} value={value} onChange={onChange} />
      {textCntVisible && (
        <Typography level='paragraph4' className={css({ color: 'grayscale.500', textAlign: 'end' })}>
          {value?.length}/00
        </Typography>
      )}
    </div>
  );
};

interface DimensionsInputProps {
  placeholder: string;
  value: string;
  dimension?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const DimensionsInput = ({ placeholder, value, dimension = 'cm', onChange }: DimensionsInputProps) => {
  return (
    <div
      className={cx(
        inputStyle({ type: 'dimension' }),
        css({
          justifyContent: 'space-between',
          flex: 1,
          width: '100%',
        }),
      )}
    >
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={css({
          flexGrow: 1,
          minWidth: '60px',
          background: 'transparent',
          border: 'none',
          color: 'inherit',
          outline: 'none',
        })}
      />
      <Typography level='paragraph2' className={css({ whiteSpace: 'nowrap', color: 'grayscale.600' })}>
        {dimension}
      </Typography>
    </div>
  );
};

interface TextAreaProps {
  placeholder: string;
  textCntVisible: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InputFat = ({ placeholder, textCntVisible, value, onChange }: TextAreaProps) => {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
      <textarea className={cx(inputFatStyle())} placeholder={placeholder} value={value} onChange={onChange} />
      {textCntVisible && (
        <Typography level='paragraph4' className={css({ color: 'grayscale.500', textAlign: 'end' })}>
          00/00
        </Typography>
      )}
    </div>
  );
};
