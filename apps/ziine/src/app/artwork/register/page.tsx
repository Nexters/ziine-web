import { ImgButton, Typography, ListType } from '@ziine/design';
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
      <ListType type={'oneRegister'} text={'제목'} required={true} placeholder='작품 제목'></ListType>
    </div>
  );
};

export default ArtworkRegisterPage;
