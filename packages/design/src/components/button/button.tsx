import { cx } from '@/styled-system/css';
import { buttonStyle, smallBtnStyle } from './button.styles';
import { CSSProperties, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'main' | 'sub';
  status?: 'default' | 'loading';
  disabled?: boolean;
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
}

export const Button = ({ children, type = 'main', status = 'default', disabled = false, onClick, className, style }: ButtonProps) => {
  return (
    <button className={cx(buttonStyle({ type, status }), className)} disabled={disabled} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

interface SmallBtnProps {
  text: string;
  type?: 'filled' | 'outlined';
  onClick: () => void;
}

export const SmallButton = ({ text, type = 'filled', onClick }: SmallBtnProps) => {
  return (
    <button className={cx(smallBtnStyle({ type }))} onClick={onClick}>
      {text}
    </button>
  );
};
