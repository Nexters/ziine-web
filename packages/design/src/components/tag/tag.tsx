import { ReactNode } from 'react';
import { css } from '../../styled-system/css';
export interface IButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Tag = ({ children, variant = 'primary' }: IButtonProps) => {
  return (
    <button
      className={css({
        fontSize: '12px',
        lineHeight: '19.2px',
        fontWeight: '400',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        px: '10px',
        py: '4px',
        border: 'solid',
        borderWidth: '1.5px',
        borderRadius: '99px',
        
        ...(variant === 'primary'
          ? {
              bg: 'rgba(255, 87, 30, 0.15)',
              color: 'rgba(255, 110, 61, 1)',
              borderColor: 'rgba(255, 87, 30, 0.1)',
            }
          : {
              bg: 'rgba(255, 87, 30, 1)',
              color: 'rgba(30, 30, 30, 1)',
              borderColor: 'rgba(30, 30, 30, 1)',
            }),
      })}
    >
      {children}
    </button>
  );
};
