import { css } from '@/styled-system/css';
import { center } from '@/styled-system/patterns';
import { PropsWithChildren } from 'react';

const ArtworkRegisterLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={css({
        display: 'flex',
        mt: '80px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '24px 16px',
        // '@media (max-width: 899px)': {
        //   padding: '24px 16px',
        // },
        // '@media (min-width: 900px) and (max-width: 1199px)': {
        //   padding: '24px 16px',
        // },
        // '@media (min-width: 1200px)': {
        //   padding: '24px 16px',
        // },
      })}
    >
      {children}
    </div>
  );
};

export default ArtworkRegisterLayout;
