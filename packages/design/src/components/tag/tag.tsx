import { TagStyleProps, tagStyles } from './tag.styles';
import { Typography } from '../typography';
import { MouseEventHandler } from 'react';

export interface IButtonProps {
  children: string;
  variant?: TagStyleProps['variant'];
  icon?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Tag = ({ children, variant = 'orangeOutlined', icon, onClick }: IButtonProps) => {
  return (
    <button className={tagStyles({ variant })} onClick={onClick}>
      <Typography level='paragraph5'>{children}</Typography>
      {icon}
    </button>
  );
};
