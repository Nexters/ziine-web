import { css } from '@/styled-system/css';
import { PropsWithChildren } from 'react';

const ArtworkRegisterLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={css({
        display: 'flex',
        mt: '80px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // '@media (max-width: 899px)': {
        //     flexDirection: 'column', // 작은 화면에서 세로로 배치
        //     alignItems: 'center', // 중앙 정렬
        //   },
        //   '@media (min-width: 900px) and (max-width: 1199px)': {
        //     flexDirection: 'row', // 중간 화면에서 가로로 배치
        //     justifyContent: 'space-between', // 공간 분배
        //   },
        //   '@media (min-width: 1200px)': {
        //     flexDirection: 'row', // 큰 화면에서 가로로 배치
        //     justifyContent: 'space-between', // 공간을 고르게 분배
        //   },
      })}
    >
      {children}
    </div>
  );
};

export default ArtworkRegisterLayout;
