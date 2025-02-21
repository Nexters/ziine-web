import { inputFatStyle, inputStyle } from './input.styles';
import { css, cx } from '@/styled-system/css';
import { Typography } from '../typography';
import { ChangeEvent, CSSProperties } from 'react';

interface InputProps {
  placeholder: string;
  maxLength?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  warning?: boolean;
}

export const Input = ({ placeholder, maxLength, value, onChange, warning }: InputProps) => {
  return (
    <>
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' })}>
        <input
          type='text'
          className={cx(inputStyle({ state: warning ? 'warning' : 'default' }))}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {maxLength && (
          <Typography
            level='paragraph4'
            className={css({ color: warning ? 'error.500' : 'grayscale.500', textAlign: 'end' })}
          >
            {value?.length}/{maxLength}
          </Typography>
        )}
      </div>
    </>
  );
};

interface DimensionsInputProps {
  placeholder: string;
  value: string;
  dimension?: string;
  warning: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const DimensionsInput = ({ placeholder, value, dimension = 'cm', onChange, warning }: DimensionsInputProps) => {
  return (
    <div
      className={cx(
        inputStyle({ type: 'dimension', state: warning ? 'warning' : 'default' }),
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
      <Typography
        level='paragraph2'
        className={css({ whiteSpace: 'nowrap', color: warning ? 'error.500' : 'grayscale.500' })}
      >
        {dimension}
      </Typography>
    </div>
  );
};

interface TextAreaProps {
  placeholder: string;
  value: string;

  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InputFat = ({ placeholder, value, onChange }: TextAreaProps) => {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
      <textarea className={cx(inputFatStyle())} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
