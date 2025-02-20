import { css } from '@/styled-system/css';
import { PropsWithChildren } from 'react';

const ArtworkRegisterLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        mt: '80px',
        justifyContent: 'center',
        alignItems: 'flex-start',

        '@media (max-width: 899px)': {
          maxWidth: '375px',
          width: '100%',
          padding: '24px 16px',
          margin: '0 auto',
        },
        '@media (min-width: 900px) and (max-width: 1199px)': {
          maxWidth: '900px',
          width: '100%',
          padding: '24px 16px',
          margin: '0 auto',
        },
        '@media (min-width: 1200px)': {
          maxWidth: '900px',
          width: '100%',
          padding: '24px 16px',
          margin: '0 auto',
        },
      })}
    >
      {children}
    </div>
  );
};

export default ArtworkRegisterLayout;
