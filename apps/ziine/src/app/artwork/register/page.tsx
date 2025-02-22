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
import { formatDateWithHyphen } from '@/shared/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { artworkSchema } from '@/features/artwork-register/model/schema';
import { z } from 'zod';

const ArtworkRegisterPage = () => {
  type ArtworkFormData = z.infer<typeof artworkSchema>;

  const {
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<ArtworkFormData>({
    resolver: zodResolver(artworkSchema),
    defaultValues: {
      artworkImageUrl: '',
      title: '',
      width: '',
      height: '',
      material: '',
      artistName: '',
      artistInfo: '',
      education: '',
      exhibitions: [],
      email: '',
      emailOption: '직접 입력',
      contacts: [],
    },
    mode: 'onChange',
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [exhibitionHistory, setExhibitionHistory] = useState<[string, string][]>([['', '']]);
  const [educationTags, setEducationTags] = useState<string[]>([]);
  const router = useRouter();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerHeight < window.outerHeight * 0.6) {
          setIsKeyboardOpen(true);
        } else {
          setIsKeyboardOpen(false);
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

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
        let imageUrl;
        if (typeof window !== 'undefined') {
          imageUrl = await getClientSideArtworksImageUrl([file.name]);
        } else {
          imageUrl = await getArtworksImageUrl([file.name]);
        }

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
      }
      //else if (window.webkit?.messageHandlers?.artworkRegisterSuccess) {
      //window.webkit.messageHandlers.callbackHandler.postMessage("MessageBody");
      //window.webkit.messageHandlers.artworkRegisterSuccess.postMessage('');
      //}
      else if (window.webkit?.messageHandlers?.callbackHandler) {
        try {
          window.webkit.messageHandlers.callbackHandler.postMessage({
            action: 'artworkRegisterSuccess',
          });
        } catch (error) {
          console.error('Error calling callbackHandler:', error);
        }
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

      const contacts = watch('contacts') || [];

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
            exhibitionDate: formatDateWithHyphen(date),
          })),
        contacts: contacts.length > 0 ? contacts : undefined,
        email: formattedEmail || undefined,
      };

      const filteredData = filterEmptyValues(formData);

      console.log('artworkFormData: ', filteredData);

      if (typeof window !== 'undefined') {
        await postClientSideArtworksForm(filteredData);
      } else {
        await postArtworksForm(filteredData);
      }
      handleWebViewRegisterFormData();
    } catch (error) {
      console.error('register artwork error', error);
    }
  };

  return (
    <div className={css({ paddingBottom: isKeyboardOpen ? '200px' : '0px' })}>
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
        <div>
          <OneRegisterArea
            text='제목'
            required
            maxLength={80}
            placeholder={['작품 제목']}
            value={watch('title')}
            onChange={(e) => setValue('title', e.target.value, { shouldValidate: true })}
            warning={Boolean(errors.title)}
          />
          {errors.title && (
            <Typography level='paragraph4' className={css({ color: 'error.500' })}>
              {errors.title.message}
            </Typography>
          )}
        </div>
        <div>
          <TwoRegisterArea
            text='작품 사이즈'
            required
            description={'디지털 아트의 경우에는 픽셀을 cm 단위로 변환하여 작성해 주세요.'}
            placeholder={['가로 사이즈', '세로 사이즈']}
            value={[watch('width'), watch('height')]}
            onWidthChange={(e) => setValue('width', e.target.value, { shouldValidate: true })}
            onHeightChange={(e) => setValue('height', e.target.value, { shouldValidate: true })}
            warning={[Boolean(errors.width), Boolean(errors.height)]}
          />
          {(errors.width || errors.height) && (
            <Typography level='paragraph4' className={css({ color: 'error.500' })}>
              {errors.width?.message || errors.height?.message}
            </Typography>
          )}
        </div>
        <div>
          <OneRegisterArea
            text='재료'
            required
            maxLength={50}
            placeholder={['ex. 캔버스에 유화']}
            value={watch('material')}
            onChange={(e) => setValue('material', e.target.value, { shouldValidate: true })}
            warning={Boolean(errors.material)}
          />
          {errors.material && (
            <Typography level='paragraph4' className={css({ color: 'error.500' })}>
              {errors.material.message}
            </Typography>
          )}
        </div>
        <OneRegisterArea
          inputType='fat'
          text='작품 상세 정보'
          required={false}
          placeholder={['ex. 작품에 담긴 의미 혹은 사용된 기법 설명']}
          value={watch('artistInfo') || ''}
          onChange={(e) => setValue('artistInfo', e.target.value)}
        />
        <Divider />
        <div>
          <OneRegisterArea
            text='작가 정보'
            required
            description={'실명이나 닉네임, 혹은 팀 작품인 경우 팀명을 작성해 주세요.'}
            placeholder={['작가 이름']}
            value={watch('artistName') || ''}
            onChange={(e) => setValue('artistName', e.target.value, { shouldValidate: true })}
            warning={Boolean(errors.artistName)}
          />
          {errors.artistName && (
            <Typography level='paragraph4' className={css({ color: 'error.500' })}>
              {errors.artistName.message}
            </Typography>
          )}
        </div>
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
        <SmallButton type='outlined' onClick={handleAddExhibitionInput}>
          <Typography level='paragraph3' className={css({ color: 'grayscale.0' })}>
            추가하기
          </Typography>
        </SmallButton>

        {/* SNS & 이메일 */}
        <SnsInfoInput
          instagramValue={watch('contacts').find((c) => c.type === 'INSTAGRAM')?.value || ''}
          linkValue={watch('contacts').find((c) => c.type === 'WEBSITE')?.value || ''}
          onInstagramChange={(e) => {
            const newContacts = watch('contacts').filter((c) => c.type !== 'INSTAGRAM');
            setValue('contacts', [...newContacts, { type: 'INSTAGRAM', value: e.target.value }]);
          }}
          onLinkChange={(e) => {
            const newContacts = watch('contacts').filter((c) => c.type !== 'WEBSITE');
            setValue('contacts', [...newContacts, { type: 'WEBSITE', value: e.target.value }]);
          }}
        />

        <DropDownInput
          placeholder={['이메일']}
          description={
            '이메일 주소를 기입하시면, 심사 통과 여부를 메일로 알려드려요. 이메일 주소는 공개되지 않으니, 안심하고 작성하세요.'
          }
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
          disabled={!isValid}
          onClick={async (e) => {
            e.preventDefault();
            const result = await trigger();
            if (result) handleSubmit(onSubmit)();
          }}
        >
          <Typography level='subtitle2'>등록 신청하기</Typography>
        </Button>
      </form>
    </div>
  );
};

export default ArtworkRegisterPage;
