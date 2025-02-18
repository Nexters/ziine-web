'use client';

import { useForm } from 'react-hook-form';
import {
  ImgButton,
  Typography,
  OneRegisterArea,
  TwoRegisterArea,
  ExhibitionInput,
  DropDownInput,
  Divider,
  Button,
  SmallButton,
  TitleDescriptionGroup,
} from '@ziine/design';
import { css } from 'styled-system/css';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  ArtworkFormItem,
  postArtworksForm,
  postClientSideArtworksForm,
  putArtworkImageToS3,
} from '@/entities/artworks/apis/mutations';
import { getArtworksImageUrl, getClientSideArtworksImageUrl } from '@/entities/artworks/apis/apis';
import { useRouter } from 'next/navigation';
import { SnsInfoInput } from '@/features/artwork-register/components/sns-info-input';
import { EducationInput } from '@/features/artwork-register/components/education-input';
import { formatYYYYMMDDDate } from '@/shared/utils';

interface FormData {
  artworkImageUrl: string;
  title: string;
  width: string;
  height: string;
  material: string;
  artistInfo: string;
  artistName: string;
  education: string;
  exhibitions: { title: string; exhibitionDate: string }[];
  instagramId: string;
  link: string;
  email: string;
  emailOption: string;
}

const ArtworkRegisterPage = () => {
  const { handleSubmit, watch, setValue } = useForm<FormData>({
    defaultValues: {
      artworkImageUrl: '',
      title: '',
      width: '',
      height: '',
      material: '',
      artistName: '',
    },
    mode: 'onChange',
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [exhibitionHistory, setExhibitionHistory] = useState<[string, string][]>([['', '']]);
  const [educationTags, setEducationTags] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (educationTags.length === 0 && watch('education') === '#') {
      setValue('education', '');
    }
  }, [educationTags, setValue, watch]);

  const onChangeIsOpen = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      try {
        const imageUrl = await getClientSideArtworksImageUrl([file.name]);

        if (imageUrl?.presignedUrlList?.length > 0) {
          await putArtworkImageToS3({
            presignedUrl: imageUrl.presignedUrlList[0].presignedUrl,
            file: file,
          });

          const newImageUrl = imageUrl.presignedUrlList[0].fileUrl;
          setImagePreview(newImageUrl);
          setValue('artworkImageUrl', newImageUrl);
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

  const handleExhibitionChange = (index: number, field: 'date' | 'title', value: string) => {
    const newHistory = [...exhibitionHistory];
    if (field === 'date') {
      newHistory[index][0] = value;
    } else {
      newHistory[index][1] = value;
    }
    setExhibitionHistory(newHistory);
  };

  const handleWebViewRegisterFormData = () => {
    if (typeof window !== 'undefined') {
      if (window.ziineApp?.artworkRegisterSuccess) {
        window.ziineApp.artworkRegisterSuccess();
      } else if (window.webkit?.messageHandlers?.artworkRegisterSuccess) {
        window.webkit.messageHandlers.artworkRegisterSuccess.postMessage('');
      } else {
        router.push('/artwork/success');
      }
    }
  };

  const filterEmptyValues = (data: Partial<ArtworkFormItem>): Partial<ArtworkFormItem> => {
    return Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(data).filter(([_, value]) => value !== '' && value !== undefined && value !== null),
    ) as Partial<ArtworkFormItem>;
  };

  const onSubmit = async () => {
    try {
      const emailOption = watch('emailOption');
      const email = watch('email');
      const formattedEmail = emailOption && emailOption !== '직접 입력' ? `${email}@${emailOption}` : email;

      const contacts = [];
      if (watch('instagramId')) {
        contacts.push({ type: 'INSTAGRAM', value: watch('instagramId') });
      }
      if (watch('link')) {
        contacts.push({ type: 'WEBSITE', value: watch('link') });
      }

      const formData: Partial<ArtworkFormItem> = {
        artworkImageUrl: watch('artworkImageUrl'),
        title: watch('title'),
        width: Number(watch('width')),
        height: Number(watch('height')),
        material: watch('material'),
        artistName: watch('artistName'),
        description: watch('artistInfo'),
        educations: educationTags.length > 0 ? educationTags : undefined,
        exhibitions: exhibitionHistory
          .filter(([date, title]) => date.trim() !== '' && title.trim() !== '')
          .map(([date, title]) => ({
            title,
            exhibitionDate: formatYYYYMMDDDate(date),
          })),
        contacts: contacts.length > 0 ? contacts : undefined,
        email: formattedEmail || undefined,
      };

      const filteredData = filterEmptyValues(formData);

      console.log('artworkFormData: ', filteredData);

      await postClientSideArtworksForm(filteredData);
      handleWebViewRegisterFormData();
    } catch (error) {
      console.error('register artwork error', error);
    }
  };

  return (
    <form
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
        required
        placeholder={['작가 이름']}
        value={watch('artistName') || ''}
        onChange={(e) => setValue('artistName', e.target.value)}
      />
      {/* 학력 */}
      <EducationInput
        value={watch('education') || ''}
        onChange={(e) => setValue('education', e.target.value)}
        tags={educationTags}
        onTagsChange={setEducationTags}
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
            placeholder={['YYYY-MM-DD', '전시 명']}
            index={index}
            value={exhibition}
            onChangeDate={(value) => handleExhibitionChange(index, 'date', value)}
            onChangeName={(value) => handleExhibitionChange(index, 'title', value)}
          />
        ))}
      </div>
      <SmallButton text='추가하기' type='outlined' onClick={handleAddExhibitionInput} />

      {/* SNS & 이메일 */}
      <SnsInfoInput
        instagramValue={watch('instagramId') || ''}
        linkValue={watch('link') || ''}
        onInstagramChange={(e) => setValue('instagramId', e.target.value)}
        onLinkChange={(e) => setValue('link', e.target.value)}
      />
      <DropDownInput
        placeholder={['이메일']}
        options={['naver.com', 'gmail.com', 'kakao.com', 'daum.net', '직접 입력']}
        text='이메일'
        required={false}
        value={watch('email') || ''}
        onChangeInputValue={(e) => setValue('email', e.target.value)}
        dropdownIsOpen={isOpen}
        onChangeIsOpen={onChangeIsOpen}
        dropdownValue={watch('emailOption') || '직접 입력'}
        onChangeOption={(option: string) => setValue('emailOption', option)}
      />

      {/* 제출 버튼 */}
      <Button
        type='main'
        disabled={
          !(
            watch('artworkImageUrl') &&
            watch('title') &&
            watch('width') &&
            watch('height') &&
            watch('material') &&
            watch('artistName')
          )
        }
        onClick={handleSubmit(onSubmit)}
      >
        <Typography level='subtitle2'>등록 신청하기</Typography>
      </Button>
    </form>
  );
};

export default ArtworkRegisterPage;
