import { css } from '@/styled-system/css';
import { Typography } from '../typography';

interface Props {
  text: string;
  required: boolean;
  description: string;
}

export const TitleDescriptionGroup = ({ text, required = true, description }: Props) => {
  return (
    <>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        })}
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
          })}
        >
          {description}
        </Typography>
      )}
    </>
  );
};
