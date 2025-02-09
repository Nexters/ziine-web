import { ImgButton, Typography } from '@ziine/design';
import { css } from 'styled-system/css';

const ArtworkRegisterPage = () => {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '900px', width: 'screen' })}>
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '12px' })}>
        <ImgButton text='이미지 업로드' />
        <Typography level='paragraph4' className={css({ color: 'grayscale.600' })}>
          *작품 이미지는 한 장만 업로드 가능합니다.
        </Typography>
      </div>
      {/* list type (one register area) 텍스트에 require option 추가하기 */}
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '8px' })}>
        <Typography level='subtitle3' className={css({ color: 'grayscale.0' })}>
          텍스트
        </Typography>
      </div>
    </div>
  );
};

export default ArtworkRegisterPage;
