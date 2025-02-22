'use client';

import { BaseImage, NavigateBar } from '@/shared';
import { Button, Typography } from '@ziine/design';
import { css } from '@/styled-system/css';
import Link from 'next/link';

const imageStyle = css({ width: '100%', aspectRatio: '320 / 240', borderRadius: '6px' });

const ArtworkRegisterGuidePage = () => {
  return (
    <div className={css({ width: '100%' })}>
      <NavigateBar />
      <div className={css({ width: '375px', margin: '0 auto' })}>
        <div className={css({ padding: '24px 16px' })}>
          <div className={css({ display: 'flex', justifyContent: 'center' })}>
            <Typography className={css({ color: 'grayscale.0', textAlign: 'center' })} level='heading4'>
              작가님의 작품을 등록하기 전,
            </Typography>
          </div>
          <div className={css({ display: 'flex', justifyContent: 'center' })}>
            <Typography className={css({ color: 'grayscale.0', textAlign: 'center' })} level='heading4'>
              꼭 확인해주세요!
            </Typography>
          </div>
        </div>
        <div className={css({ padding: '24px 16px 40px' })}>
          <div>
            <Typography className={css({ color: 'grayscale.0' })} level='subtitle1'>
              01
            </Typography>
            <div className={css({ margin: '8px 0' })}>
              <Typography className={css({ color: 'grayscale.0' })} level='subtitle1'>
                깔끔한 배경에서 촬영 또는 보정 및 크롭하여 업로드 해주세요.
              </Typography>
            </div>
            <Typography className={css({ color: 'grayscale.300' })} level='paragraph3'>
              배경이 많이 보이거나 빛 반사가 된 이미지와 같은 경우,{' '}
              <Typography className={css({ color: 'grayscale.0' })} level='paragraph3'>
                작품 심사가 반려될 수 있어요.
              </Typography>
            </Typography>
          </div>

          <div className={css({ margin: '14px 0 24px' })}>
            <BaseImage
              src={'/assets/register-wait-1.svg'}
              alt={'image1'}
              width={320}
              height={240}
              className={imageStyle}
            />
          </div>

          <div>
            <Typography className={css({ color: 'grayscale.0' })} level='subtitle1'>
              02
            </Typography>
            <div className={css({ margin: '8px 0' })}>
              <Typography className={css({ color: 'grayscale.0' })} level='subtitle1'>
                작품 승인 후 등록이 가능해요.
              </Typography>
            </div>
            <Typography className={css({ color: 'grayscale.300' })} level='paragraph3'>
              작가가 작품 등록 요청 후,{' '}
              <Typography className={css({ color: 'grayscale.0' })} level='paragraph3'>
                Ziine 측에서 등록 여부를 심사 후 등록돼요.{' '}
              </Typography>
              <Typography className={css({ color: 'grayscale.300' })} level='paragraph3'>
                작품 등록 화면에서 메일을 작성하면{' '}
                <Typography className={css({ color: 'grayscale.0' })} level='paragraph3'>
                  심사 통과 여부를 메일로 받아볼 수 있어요.
                </Typography>
              </Typography>
            </Typography>
          </div>

          <div className={css({ margin: '14px 0 24px' })}>
            <BaseImage
              src={'/assets/register-wait-2.svg'}
              alt={'image2'}
              width={320}
              height={240}
              className={imageStyle}
            />
          </div>

          <div>
            <Typography className={css({ color: 'grayscale.0' })} level='subtitle1'>
              03
            </Typography>
            <div className={css({ margin: '8px 0' })}>
              <Typography className={css({ color: 'grayscale.0' })} level='subtitle1'>
                승인까지의 시간은 최대 3일 소요 예정이에요.
              </Typography>
            </div>
            <Typography className={css({ color: 'grayscale.300' })} level='paragraph3'>
              심사 통과 시, 별도의 추가 등록 과정 없이 자동으로 업로드 돼요.
            </Typography>
          </div>

          <div className={css({ margin: '14px 0 40px' })}>
            <BaseImage
              src={'/assets/register-wait-3.svg'}
              alt={'image3'}
              width={320}
              height={240}
              className={imageStyle}
            />
          </div>
        </div>

        <div
          className={css({
            width: '100%',
            position: 'sticky',
            bottom: 0,
            padding: '12px 16px 40px',
            bg: 'grayscale.900',
          })}
        >
          <Link href={'/artwork/register-web'}>
            <Button className={css({ width: '100%' })} onClick={() => undefined}>
              <Typography className={css({ color: 'grayscale.900' })} level='paragraph1'>
                작품 등록하기
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtworkRegisterGuidePage;
