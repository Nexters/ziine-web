'use client';

import {
  ImgButton,
  Typography,
  OneRegisterArea,
  TwoRegisterArea,
  ExhibitionInput,
  ExhibitionIconInput,
  DropDownInput,
  Divider,
  Button,
  SmallButton,
  TitleDescriptionGroup,
} from '@ziine/design';
import { css } from 'styled-system/css';
import { ChangeEvent, useEffect, useState } from 'react';
import { ArtworkFormItem, postArtworksForm, putArtworkImageToS3 } from '@/entities/artworks/apis/mutations';
import { getArtworksImageUrl } from '@/entities/artworks/apis/apis';

type EventType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

const ArtworkRegisterPage = () => {
  const [imagePreview, setImagePreview] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [material, setMaterial] = useState<string>('');
  const [artistInfo, setArtistInfo] = useState<string>('');
  const [artistName, setArtistName] = useState<string>('');
  const [education, setEducation] = useState<string>('');
  const [instagramId, setInstagramId] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  //const [emailOption, setEmailOption] = useState<string>('');

  const [isRegisterBtnDisabled, setIsRegisterBtnDisabled] = useState(false);
  const options = ['naver.com', 'gmail.com', 'kakao.com', 'daum.net', '직접 입력'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[options.length - 1]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const allRequiredFilled = title.trim() !== '' && Number(width) > 0 && Number(height) > 0 && material.trim() !== '';

    setIsRegisterBtnDisabled(!allRequiredFilled);
  }, [title, width, height, material, artistName, instagramId, email]);

  const uploadImageToServer = async (file: File) => {
    try {
      const response = await getArtworksImageUrl([file.name]);
      console.log('getArtworksImage successfully:', response);
      return response;
    } catch (err) {
      console.error('Error uploadImageToServer: ', err);
    }
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      try {
        const imageUrl = await uploadImageToServer(file);

        if (imageUrl && imageUrl.presignedUrlList && imageUrl.presignedUrlList.length > 0) {
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

  const handleTitleChange = (e: EventType) => setTitle(e.target.value);
  const handleWidthChange = (e: EventType) => {
    const value = e.target.value;
    if (value === '' || !isNaN(Number(value))) {
      setWidth(value);
    }
  };

  const handleHeightChange = (e: EventType) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === '') {
      setHeight(value);
    }
  };

  const handleMaterialChange = (e: EventType) => setMaterial(e.target.value);
  const handleArtistInfoChange = (e: EventType) => setArtistInfo(e.target.value);
  const handleArtistNameChange = (e: EventType) => setArtistName(e.target.value);
  const handleEducationChange = (e: EventType) => setEducation(e.target.value);
  const [exhibitionHistory, setExhibitionHistory] = useState<[string, string][]>([['', '']]);

  const handleExhibitionDateChange = (index: number, value: string) => {
    const newExhibitionHistory = [...exhibitionHistory];
    newExhibitionHistory[index][0] = value; // 날짜 업데이트
    setExhibitionHistory(newExhibitionHistory);
  };

  const handleExhibitionNameChange = (index: number, value: string) => {
    const newExhibitionHistory = [...exhibitionHistory];
    newExhibitionHistory[index][1] = value; // 전시명 업데이트
    setExhibitionHistory(newExhibitionHistory);
  };

  const handleAddExhibitionInput = () => {
    setExhibitionHistory([...exhibitionHistory, ['', '']]); // 새로운 항목 추가
  };

  const handleInstagramIdChange = (e: EventType) => setInstagramId(e.target.value);
  const handleLinkChange = (e: EventType) => setLink(e.target.value);

  const handleEmailChange = (e: EventType) => setEmail(e.target.value);
  //const handleEmailOptionChange = (option: string) => setSelectedOption(option);

  const handleWebViewRegisterFormData = async () => {
    try {
      const response = await postArtworksForm(artworkFormData);
      console.log('Artwork registered successfully:', response);

      // 📌 네이티브 웹뷰 브릿지 함수 호출
      if (window.ziineApp && typeof window.ziineApp.artworkRegisterSuccess === 'function') {
        window.ziineApp.artworkRegisterSuccess();
      } else {
        console.warn('ziineApp.artworkRegisterSuccess is not defined');
      }
    } catch (error) {
      console.error('Failed to register artwork:', error);
    }
  };

  const artworkFormData: ArtworkFormItem = {
    title: title,
    width: Number(width),
    height: Number(height),
    material: material,
    artworkImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7lfFTzOS1-oWBBCCzdjUAIkckPDMrfzhrw&s',
    artistName: artistName,
    description: artistInfo,
    educations: [education],
    // exhibitions: exhibitionHistory.map(([title, exhibitionDate]) => ({
    //   title,
    //   exhibitionDate: new Date(exhibitionDate),
    // })),
    contacts: [
      {
        type: 'INSTAGRAM',
        value: instagramId,
      },
    ],
    email: email,
  };

  const handleRegisterFormData = async () => {
    try {
      const response = await postArtworksForm(artworkFormData).then(() => {
        handleWebViewRegisterFormData();
      });
      console.log('Artwork registered successfully:', response);
    } catch (error) {
      console.error('Failed to register artwork:', error);
    }
  };

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        maxWidth: '900px',
        width: '100%',
        mb: '40px',
      })}
    >
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '12px' })}>
        <ImgButton
          text={imagePreview !== '' ? '이미지 바꾸기' : '이미지 업로드'}
          onChange={handleImageChange}
          imagePreview={imagePreview}
        />

        <Typography level='paragraph4' className={css({ color: 'grayscale.600' })}>
          *작품 이미지는 한 장만 업로드 가능합니다.
        </Typography>
      </div>
      <OneRegisterArea
        text={'제목'}
        required={true}
        placeholder={['작품 제목']}
        value={title}
        onChange={handleTitleChange}
      />
      <TwoRegisterArea
        text='작품 사이즈'
        required={true}
        placeholder={['가로 사이즈', '세로 사이즈']}
        description='디지털 아트의 경우에는 픽셀을 cm 단위로 변환하여 작성해 주세요.'
        value={[width, height]}
        onWidthChange={handleWidthChange}
        onHeightChange={handleHeightChange}
      />
      <OneRegisterArea
        text={'재료'}
        required={true}
        placeholder={['ex. 캔버스에 유화']}
        value={material}
        onChange={handleMaterialChange}
      />
      <OneRegisterArea
        inputType={'fat'}
        text={'작가 상세 정보'}
        required={false}
        placeholder={['ex. 작품에 담긴 의미 혹은 사용된 기법 설명']}
        textCntVisible={false}
        value={artistInfo}
        onChange={handleArtistInfoChange}
      />
      <Divider />
      <OneRegisterArea
        text={'작가 정보'}
        required={false}
        placeholder={['작가 이름']}
        description='본인을 들어낼 수 있는 설명이나 닉네임을 작성해 주세요.'
        textCntVisible={false}
        value={artistName}
        onChange={handleArtistNameChange}
      />
      <OneRegisterArea
        text={'학력'}
        required={false}
        placeholder={['학력']}
        description='공개하고자 하는 학교 이름과 학과 정보를 해쉬태그 형태로 기입해 주세요.'
        value={education}
        onChange={handleEducationChange}
      />
      <div>
        <TitleDescriptionGroup
          text={'전시 이력'}
          required={false}
          description={'과거 전시했던 개인전 및 단체전의일자, 전시 명을 작성해 주세요.'}
        />
        {exhibitionHistory.map((exhibition, index) => (
          <ExhibitionInput
            key={index}
            placeholder={['YYYY.MM', '전시 명']}
            index={index}
            value={exhibition}
            onChangeDate={(value) => handleExhibitionDateChange(index, value)}
            onChangeName={(value) => handleExhibitionNameChange(index, value)}
          />
        ))}
      </div>
      <SmallButton text='추가하기' type='outlined' onClick={handleAddExhibitionInput} />
      <ExhibitionIconInput
        text={'홍보 채널'}
        required={false}
        placeholder={['@인스타그램 아이디', '비핸스 등 웹사이트 링크']}
        icons={['', '']}
        description={'나와 내 작품을 홍보할 수 있는 채널이 있다면, 알려주세요.'}
        value={[instagramId, link]}
        onChangeInstagramId={handleInstagramIdChange}
        onChangeLink={handleLinkChange}
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
        value={email}
        dropdownValue={selectedOption}
        onChangeInputValue={handleEmailChange}
        onChangeIsOpen={toggleDropdown}
        onChangeOption={selectOption}
        dropdownIsOpen={isOpen}
      />

      <Button
        onClick={handleRegisterFormData}
        disabled={isRegisterBtnDisabled}
        children={<Typography level='subtitle2' />}
      ></Button>
    </div>
  );
};

export default ArtworkRegisterPage;
