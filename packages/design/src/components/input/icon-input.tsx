import { cx } from '@/styled-system/css/cx';
import { TitleDescriptionGroup } from '../list-type/title-description-group';
import { container, iconInputStyle, inputStyle } from './input.styles';
import { IconNames } from '../icon/type';
import { Icon } from '../icon';
import { ColorToken } from '@/styled-system/tokens';

interface IconInputProps {
  text: string;
  placeholder: string[];
  description: string;
  value: string[];
  onChangeInstagramId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLink: (e: React.ChangeEvent<HTMLInputElement>) => void;
  instagramIconName: IconNames;
  linkIconName?: IconNames;
  linkIconColor?: ColorToken;
  onInstagramFocus?: () => void;
  onInstagramBlur?: () => void;
  onLinkFocus?: () => void;
  onLinkBlur?: () => void;
}

export const IconInput = ({
  text,
  placeholder,
  description,
  value,
  onChangeInstagramId,
  onChangeLink,
  instagramIconName,
  linkIconName,
  linkIconColor,
  onInstagramFocus,
  onInstagramBlur,
  onLinkFocus,
  onLinkBlur,
}: IconInputProps) => {
  return (
    <div className={cx(iconInputStyle())}>
      <TitleDescriptionGroup text={text} required={false} description={description!} />
      <div className={cx(container())}>
        <div className={cx(inputStyle())}>
          <Icon
            name={instagramIconName ?? (value[0].length > 0 ? 'instagram_color' : 'instagram_gray')}
            size='medium'
          />

          <input
            placeholder={placeholder[0]}
            value={value[0]}
            onChange={onChangeInstagramId}
            onFocus={onInstagramFocus}
            onBlur={onInstagramBlur}
            style={{ flex: 1, outline: 'none' }}
          ></input>
        </div>

        <div className={cx(inputStyle())}>
          <Icon
            name={linkIconName ?? 'link'}
            size='medium'
            color={linkIconColor ?? (value[1].length > 0 ? 'grayscale.0' : 'grayscale.600')}
          />

          <input
            placeholder={placeholder[1]}
            value={value[1]}
            onChange={onChangeLink}
            onFocus={onLinkFocus}
            onBlur={onLinkBlur}
            style={{ flex: 1, outline: 'none' }}
          ></input>
        </div>
      </div>
    </div>
  );
};
