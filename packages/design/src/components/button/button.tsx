import { cx } from '@/styled-system/css';
import { buttonStyle, smallBtnStyle } from './button.styles';

interface ButtonProps {
  text: string;
  type?: 'main' | 'sub';
  status?: 'default' | 'loading';
  disabled?: boolean;
}

export const Button = ({ text, type = 'main', status = 'default', disabled = false }: ButtonProps) => {
  return (
    <button className={cx(buttonStyle({ type, status }))} disabled={disabled}>
      {text}
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
