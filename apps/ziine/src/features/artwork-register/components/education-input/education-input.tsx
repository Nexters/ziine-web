import { css } from '@/styled-system/css';
import { Icon, Input, Tag, TitleDescriptionGroup } from '@ziine/design';
import { ChangeEvent, useEffect } from 'react';

interface EducationInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  tags: string[];
  onTagsChange: (tags: string[]) => void;
}

export const EducationInput = ({ value, onChange, tags, onTagsChange }: EducationInputProps) => {
  useEffect(() => {
    if (!value || value !== '#') {
      setTimeout(() => {
        onChange({ target: { value: '#' } } as ChangeEvent<HTMLInputElement>);
      }, 0);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // 띄어쓰기를 기준으로 단어를 분리하여 태그로 등록
    if (value.includes(' ')) {
      const words = value.trim().split(/\s+/);
      onTagsChange([...tags, ...words]);
      onChange({ target: { value: '#' } } as ChangeEvent<HTMLInputElement>);
    } else {
      onChange({ target: { value: value } } as ChangeEvent<HTMLInputElement>);
    }
  };

  const handleTagClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleRemoveTag = (index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

      <div className={css({ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' })}>
        <Input placeholder={'#대학교'} value={value} onChange={handleChange} />
      </div>

      <div className={css({ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' })}>
        {tags.map((tag, index) => (
          <div key={index}>
            <Tag
              onClick={handleTagClick}
              variant='grayFilled'
              icon={
                <div onClick={() => handleRemoveTag(index)} style={{ cursor: 'pointer' }}>
                  <Icon name='cancel' size='small' color='grayscale.600' />
                </div>
              }
            >
              {`${tag}`}
            </Tag>
          </div>
        ))}
      </div>
    </div>
  );
};
