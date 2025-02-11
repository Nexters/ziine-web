import {
  ImgButton,
  Typography,
  ListType,
  ExhibitionInput,
  ExhibitionIconInput,
  DropDownInput,
  Divider,
} from '@ziine/design';
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
      <ListType text={'제목'} required={true} placeholder={['작품 제목']} type={''} />
      <ListType
        type={'twoRegister'}
        text='텍스트'
        required={true}
        placeholder={['가로 사이즈', '세로 사이즈']}
        description='디지털 아트의 경우에는 픽셀을 cm 단위로 변환하여 작성해 주세요.'
        textCntVisible={false}
      />
      <ListType text={'재료'} required={true} placeholder={['ex. 캔버스에 유화']} type={''} />
      <ListType
        inputType={'fat'}
        text={'작가 상세 정보'}
        required={false}
        placeholder={['ex. 작품에 담긴 의미 혹은 사용된 기법 설명']}
        textCntVisible={false}
      />
      <Divider />
      <ListType
        text={'작가 정보'}
        required={false}
        placeholder={['작가 이름']}
        description='본인을 들어낼 수 있는 설명이나 닉네임을 작성해 주세요.'
        textCntVisible={false}
        type={''}
      />
      <ListType
        text={'학력'}
        required={false}
        placeholder={['학력']}
        description='공개하고자 하는 학교 이름과 학과 정보를 해쉬태그 형태로 기입해 주세요.'
        type={''}
      />
      <ExhibitionInput
        text={'전시 이력'}
        required={false}
        placeholder={['YYYY.MM', '전시 명']}
        description={'과거 전시했던 개인전 및 단체전의 일자, 전시 명을 작성해 주세요.'}
      />
      <ExhibitionIconInput
        text={'홍보 채널'}
        required={false}
        placeholder={['@인스타그램 아이디', '비핸스 등 웹사이트 링크']}
        icons={['', '']}
        description={'나와 내 작품을 홍보할 수 있는 채널이 있다면, 알려주세요.'}
      />
      <Divider />
      <DropDownInput
        placeholder={['이메일']}
        options={['직접 입력', '옵션1', '옵션2', '옵션3']}
        text={'이메일'}
        description={
          '이메일 주소를 기입하시면, 심사 통과 여부를 메일로 알려드려요.\n 이메일 주소는 공개되지 않으니, 안심하고 작성하세요.'
        }
        required={false}
      />
    </div>
  );
};

export default ArtworkRegisterPage;
