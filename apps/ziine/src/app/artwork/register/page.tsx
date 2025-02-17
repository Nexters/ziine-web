'use client';

import { useForm } from 'react-hook-form';
import {
  ImgButton,
  Typography,
  OneRegisterArea,
  TwoRegisterArea,
  ExhibitionInput,
  IconInput,
  DropDownInput,
  Divider,
  Button,
  SmallButton,
  TitleDescriptionGroup,
} from '@ziine/design';
import { css } from 'styled-system/css';
import { ChangeEvent, useState } from 'react';
import { ArtworkFormItem, postArtworksForm, putArtworkImageToS3 } from '@/entities/artworks/apis/mutations';
import { getArtworksImageUrl } from '@/entities/artworks/apis/apis';
import { useRouter } from 'next/navigation';
import { SnsInfoInput } from '@/features/artwork-register/components/sns-info-input';

interface FormData {
  title: string;
  width: string;
  height: string;
  material: string;
  artistInfo: string;
  artistName: string;
  education: string;
  instagramId: string;
  link: string;
  email: string;
  emailOption: string;
}

const ArtworkRegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      title: '',
      width: '',
      height: '',
      material: '',
      artistInfo: '',
      artistName: '',
      education: '',
      instagramId: '',
      link: '',
      email: '',
      emailOption: '',
    },
    mode: 'onChange',
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [exhibitionHistory, setExhibitionHistory] = useState<[string, string][]>([['', '']]);

  const onChangeIsOpen = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      try {
        const imageUrl = await getArtworksImageUrl([file.name]);

        if (imageUrl?.presignedUrlList?.length > 0) {
          await putArtworkImageToS3({
            presignedUrl: imageUrl.presignedUrlList[0].presignedUrl,
            file: file,
          });

          setImagePreview(imageUrl.presignedUrlList[0].fileUrl);
        } else {
          throw new Error('Invalid response structure');
        }
      } catch (error) {
        console.error('Error uploading image: ', error);
      }
    }
  };

  const handleAddExhibitionInput = () => {
    setExhibitionHistory([...exhibitionHistory, ['', '']]);
  };

  const router = useRouter();

  const handleWebViewRegisterFormData = () => {
    if (typeof window !== 'undefined') {
      if (window.ziineApp?.artworkRegisterSuccess) {
        window.ziineApp.artworkRegisterSuccess();
      } else if (window.webkit?.messageHandlers?.artworkRegisterSuccess) {
        window.webkit.messageHandlers.artworkRegisterSuccess.postMessage(null);
      } else {
        router.push('/artwork/success');
      }
    }
  };

  const filterEmptyValues = (data: Record<string, any>) => {
    return Object.entries(data).reduce((acc, [key, value]) => {
      if (value !== '' && value !== undefined && value !== null) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, any>);
  };

  const onSubmit = async (formData: FormData) => {
    try {
      const filteredData = filterEmptyValues(formData);

      const artworkFormData: ArtworkFormItem = {
        title: filteredData.title,
        width: Number(filteredData.width),
        height: Number(filteredData.height),
        material: filteredData.material,
        artworkImageUrl: imagePreview || 'https://via.placeholder.com/150',
        artistName: filteredData.artistName,
        description: filteredData.artistInfo,
        educations: filteredData.education ? [filteredData.education] : undefined,
        contacts: filteredData.instagramId ? [{ type: 'INSTAGRAM', value: filteredData.instagramId }] : undefined,
        email: filteredData.email,
      };

      await postArtworksForm(artworkFormData);
      handleWebViewRegisterFormData();
    } catch (error) {
      console.error('❌ Failed to register artwork:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        maxWidth: '900px',
        width: '100%',
        mb: '40px',
      })}
    >
      {/* 이미지 업로드 */}
      <ImgButton
        text={imagePreview ? '이미지 바꾸기' : '이미지 업로드'}
        onChange={handleImageChange}
        imagePreview={imagePreview}
      />
      <Typography level='paragraph4' className={css({ color: 'grayscale.600' })}>
        *작품 이미지는 한 장만 업로드 가능합니다.
      </Typography>

      {/* 입력 필드 */}
      <OneRegisterArea
        text='제목'
        required
        placeholder={['작품 제목']}
        value={watch('title')}
        onChange={(e) => setValue('title', e.target.value)}
      />
      <TwoRegisterArea
        text='작품 사이즈'
        required
        placeholder={['가로 사이즈', '세로 사이즈']}
        value={[watch('width'), watch('height')]}
        onWidthChange={(e) => setValue('width', e.target.value)}
        onHeightChange={(e) => setValue('height', e.target.value)}
      />
      <OneRegisterArea
        text='재료'
        required
        placeholder={['ex. 캔버스에 유화']}
        value={watch('material')}
        onChange={(e) => setValue('material', e.target.value)}
      />
      <OneRegisterArea
        inputType='fat'
        text='작가 상세 정보'
        required={false}
        placeholder={['ex. 작품에 담긴 의미 혹은 사용된 기법 설명']}
        value={watch('artistInfo')}
        onChange={(e) => setValue('artistInfo', e.target.value)}
      />
      <Divider />
      <OneRegisterArea
        text='작가 정보'
        required={false}
        placeholder={['작가 이름']}
        value={watch('artistName')}
        onChange={(e) => setValue('artistName', e.target.value)}
      />
      <OneRegisterArea
        text='학력'
        required={false}
        placeholder={['학력']}
        value={watch('education')}
        onChange={(e) => setValue('education', e.target.value)}
      />
      {/* 전시 이력 */}
      <div>
        <TitleDescriptionGroup
          text='전시 이력'
          required={false}
          description={'과거 전시했던 개인전 및 단체전의 일자, 전시 명을 작성해 주세요.'}
        />
        {exhibitionHistory.map((exhibition, index) => (
          <ExhibitionInput
            key={index}
            placeholder={['YYYY.MM', '전시 명']}
            index={index}
            value={exhibition}
            onChangeDate={(value) => {
              const newHistory = [...exhibitionHistory];
              newHistory[index][0] = value;
              setExhibitionHistory(newHistory);
            }}
            onChangeName={(value) => {
              const newHistory = [...exhibitionHistory];
              newHistory[index][1] = value;
              setExhibitionHistory(newHistory);
            }}
          />
        ))}
      </div>
      <SmallButton text='추가하기' type='outlined' onClick={handleAddExhibitionInput} />

      {/* SNS & 이메일 */}
      <SnsInfoInput
        instagramValue={watch('instagramId')}
        linkValue={watch('link')}
        onInstagramChange={(e) => setValue('instagramId', e.target.value)}
        onLinkChange={(e) => setValue('link', e.target.value)}
      />
      <DropDownInput
        placeholder={['이메일']}
        options={['naver.com', 'gmail.com', 'kakao.com', 'daum.net', '직접 입력']}
        text='이메일'
        required={false}
        value={watch('email')}
        onChangeInputValue={(e) => setValue('email', e.target.value)}
        dropdownIsOpen={isOpen}
        onChangeIsOpen={onChangeIsOpen}
        dropdownValue={watch('emailOption') || '직접 입력'}
        onChangeOption={(option: string) => setValue('emailOption', option)}
      />

      {/* 제출 버튼 */}
      <Button type='main' disabled={!isValid} onClick={() => {}}>
        <Typography level='subtitle2'>등록 신청하기</Typography>
      </Button>
    </form>
  );
};

export default ArtworkRegisterPage;
