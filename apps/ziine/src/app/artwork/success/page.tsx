'use client';

import { Button, Typography } from '@ziine/design';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../../public/assets/images/after uploaded.json';
import Link from 'next/link';
import { css } from '@/styled-system/css';

const ArtworkRegisterSuccessPage = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 16px',
          gap: '12px',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Typography
          level='heading4'
          className={css({
            color: 'grayscale.0',
          })}
        >
          작품 등록이 완료되었어요!
        </Typography>
        <Typography
          level='paragraph3'
          className={css({
            color: 'grayscale.0',
          })}
        >
          최대 3일 내로 심사 후, 통과 시 자동으로 업로드됩니다.
        </Typography>
      </div>
      {/* 로티 */}
      <Lottie
        animationData={lottieJson}
        className={css({
          maxWidth: '280px',
        })}
      />
      <Link
        href={'/'}
        className={css({
          mt: '110px',
          maxWidth: '870px',
        })}
      >
        <Button type='sub' onClick={() => {}}>
          홈으로 돌아가기
        </Button>
      </Link>
    </div>
  );
};

export default ArtworkRegisterSuccessPage;
