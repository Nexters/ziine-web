import { ImgButton, Typography } from '@ziine/design';
import { css } from 'styled-system/css';

const ArtworkRegisterPage = () => {
  const input_paragraph_style = {
    fontSize: '12px',
    fontWeight: 'medium',
    lineHeight: '160%',
    letterSpacing: '0%',
  };
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
        {/* input */}
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
          <input
            type='text'
            className={css({
              display: 'flex',
              height: '50px',
              padding: '16px',
              gap: '8px',
              alignSelf: 'stretch',
              borderRadius: '6px',
              bg: 'grayscale.800',
              color: 'grayscale.0',
              ...input_paragraph_style,
              _placeholder: {
                color: 'grayscale.600',
              },
              _focus: {
                outline: 'none',
                border: 'solid',
                borderWidth: '1.5px',
                borderColor: 'grayscale.600',
                caretColor: 'grayscale.0',
              },
            })}
            placeholder='Place holder'
          ></input>
          <Typography level='paragraph4' className={css({ color: 'grayscale.500', textAlign: 'end' })}>
            00/00
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ArtworkRegisterPage;
