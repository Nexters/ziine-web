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
      <ListType type={'oneRegister'} text={'제목'} required={true} placeholder='작품 제목' />
      {/* list type (two register area) */}
      <ListType type={'oneRegister'} text={'재료'} required={true} placeholder='ex. 캔버스에 유화' />
      {/* list type (two register area) */}
      {/* list type (two register area + big input) */}
      {/* divider */}
      {/* oneRegister: textCnt option 추가, description option 추가 */}
      <ListType type={'oneRegister'} text={'작가 정보'} required={false} placeholder='작가 이름' />
      <ListType type={'oneRegister'} text={'학력'} required={false} placeholder='학력' />
      {/* list type (exhibition input) */}
      {/* list type (sns form) */}
      {/* drop down */}
    </div>
  );
};

export default ArtworkRegisterPage;
