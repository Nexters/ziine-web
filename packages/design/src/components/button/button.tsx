import { cx } from '@/styled-system/css';
import { buttonStyle } from './button.styles';

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
