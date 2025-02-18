import { css } from '@/styled-system/css';
import { Icon, Input, Tag, TitleDescriptionGroup, Typography } from '@ziine/design';
import { ChangeEvent, useEffect, useState } from 'react';

interface EducationInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  tags: string[];
  onTagsChange: (tags: string[]) => void;
}

const EducationInput = ({ value, onChange, tags, onTagsChange }: EducationInputProps) => {
  useEffect(() => {
    if (value === '#' && tags.length === 0) {
      onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [value, tags, onChange]);

  const handleTagClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      return;
    }
    if (e.key === ' ' && value.trim() !== '' && value !== '#') {
      e.preventDefault();

      const trimmedValue = value.trim().replace(/^#/, '');
      const newTags = [...tags, trimmedValue];
      onTagsChange(newTags);

      setTimeout(() => {
        onChange({ target: { value: '#' } } as React.ChangeEvent<HTMLInputElement>);
      }, 0);
    }
  };
  const handelRemoveTag = (index: number, e: React.MouseEvent) => {
    const newTags = tags.filter((_, i) => i !== index);
    onTagsChange(newTags);
  };

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '8px' })}>
      <TitleDescriptionGroup
        text={'학력'}
        required={false}
        description={'공개하고자 하는 학교 이름과 학과 정보를 해쉬태그 형태로 기입해 주세요.'}
      />

      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: '100%',
        })}
      >
        <Input
          placeholder={'#대학교'}
          textCntVisible={false}
          value={value}
          onChange={(e) => {
            const newValue = e.target.value;
            if (newValue === '' || newValue === ' ') {
              onChange({ target: { value: '#' } } as React.ChangeEvent<HTMLInputElement>);
            } else if (!newValue.startsWith('#')) {
              onChange({ target: { value: `#${newValue}` } } as React.ChangeEvent<HTMLInputElement>);
            } else {
              onChange(e);
            }
          }}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className={css({ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' })}>
        {tags.map((tag, index) => (
          <div key={index}>
            <Tag
              onClick={handleTagClick}
              children={`#${tag}`}
              variant='grayFilled'
              icon={
                <div onClick={(e) => handelRemoveTag(index, e)} style={{ cursor: 'pointer' }}>
                  <Icon name='cancel' size='small' color='grayscale.600' />
                </div>
              }
            ></Tag>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationInput;
