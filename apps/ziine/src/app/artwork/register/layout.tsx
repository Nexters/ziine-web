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

        '@media (max-width: 899px)': {
          maxWidth: '375px',
          width: '100%', // 전체 너비를 차지
          padding: '24px 16px',
          margin: '0 auto', // 가운데 정렬을 위해 자동 마진 추가
        },
        '@media (min-width: 900px) and (max-width: 1199px)': {
          maxWidth: '900px', // 중간 크기에서 최대 너비 설정
          width: '100%', // 전체 너비를 차지
          padding: '24px 16px',
          margin: '0 auto', // 가운데 정렬을 위해 자동 마진 추가
        },
        '@media (min-width: 1200px)': {
          maxWidth: '900px', // 큰 화면에서 최대 너비 설정
          width: '100%', // 전체 너비를 차지
          padding: '24px 16px',
          margin: '0 auto', // 가운데 정렬을 위해 자동 마진 추가
        },
      })}
    >
      {children}
    </div>
  );
};

export default ArtworkRegisterLayout;
