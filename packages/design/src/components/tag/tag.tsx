import { TagStyleProps, tagStyles } from './tag.styles';
import { Typography } from '../typography';

export interface IButtonProps {
  children: string;
  variant?: TagStyleProps['variant'];
  icon?: React.ReactNode;
}

export const Tag = ({ children, variant = 'orangeOutlined', icon }: IButtonProps) => {
  return (
    <button className={tagStyles({ variant })}>
      <Typography level='paragraph5'>{children}</Typography>
      {icon}
    </button>
  );
};
