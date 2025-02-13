import { listTypeStyle } from './list-type.styles';
import { css, cx } from '@/styled-system/css';
import { Typography } from '../typography';
import { Input } from '../input';
import { DropDownList, ImgInput, InputFat } from '../input/input';
import { TitleDescriptionGroup } from './title-description-group';

type InputType = 'thin' | 'fat';
type EventType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

interface Props {
  inputType?: InputType;
  text: string;
  required: boolean;
  placeholder: string[];
  description?: string;
  textCntVisible?: boolean;
  value: string;
  onChange: (e: EventType) => void;
}

export const OneRegisterArea = ({
  inputType = 'thin',
  text,
  required = true,
  placeholder,
  description,
  textCntVisible = true,
  value,
  onChange,
}: Props) => {
  return (
    <div className={cx(listTypeStyle())}>
      <TitleDescriptionGroup text={text} required={required} description={description!} />

      <div
        className={css({
          display: 'grid',
          gap: '8px',
          gridTemplateColumns: '1fr',
          width: '100%',
        })}
      >
        {inputType === 'fat' ? (
          <InputFat placeholder={placeholder[0]} textCntVisible={textCntVisible} value={value} onChange={onChange} />
        ) : (
          <Input placeholder={placeholder[0]} textCntVisible={textCntVisible} value={value} onChange={onChange} />
        )}
      </div>
    </div>
  );
};

interface TwoRegisterAreaProps {
  text: string;
  required: boolean;
  placeholder: string[];
  description?: string;
  textCntVisible?: boolean;
  value: number[];
  onWidthChange: (e: EventType) => void;
  onHeightChange: (e: EventType) => void;
}

export const TwoRegisterArea = ({
  text,
  required = true,
  placeholder,
  description,
  textCntVisible = true,
  value,
  onWidthChange,
  onHeightChange,
}: TwoRegisterAreaProps) => {
  return (
    <div className={cx(listTypeStyle())}>
      <TitleDescriptionGroup text={text} required={required} description={description!} />

      <div
        className={css({
          display: 'grid',
          gap: '8px',
          gridTemplateColumns: '1fr 1fr',
          width: '100%',
        })}
      >
        <Input placeholder={placeholder[0]} textCntVisible={textCntVisible} value={value[0]} onChange={onWidthChange} />
        <Input
          placeholder={placeholder[1]}
          textCntVisible={textCntVisible}
          value={value[1]}
          onChange={onHeightChange}
        />
      </div>
    </div>
  );
};

interface ExhibitionInputProps {
  placeholder: string[];
  index: number;
  value: [string, string];
  onChangeDate: (value: string) => void;
  onChangeName: (value: string) => void;
}

export const ExhibitionInput = ({ index, placeholder, value, onChangeDate, onChangeName }: ExhibitionInputProps) => {
  return (
    <div
      className={cx(
        listTypeStyle(),
        css({
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          mt: '16px',
        }),
      )}
    >
      <Typography level='paragraph2' className={css({ color: 'grayscale.300' })}>
        {`전시 ${index + 1}`}
      </Typography>
      <Input
        placeholder={placeholder[0]}
        textCntVisible={false}
        value={value[0]}
        onChange={(e) => onChangeDate(e.target.value)}
      />
      <Input
        placeholder={placeholder[1]}
        textCntVisible={false}
        value={value[1]}
        onChange={(e) => onChangeName(e.target.value)}
      />
      {/* 버튼 */}
    </div>
  );
};

interface IconInputProps {
  text: string;
  required: boolean;
  placeholder: string[];
  description: string;
  value: string[];
  icons: string[];
  onChangeInstagramId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLink: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ExhibitionIconInput = ({
  text,
  required = true,
  placeholder,
  description,
  icons,
  value,
  onChangeInstagramId,
  onChangeLink,
}: IconInputProps) => {
  return (
    <div className={cx(listTypeStyle())}>
      <TitleDescriptionGroup text={text} required={required} description={description!} />
      <ImgInput
        img={icons}
        placeholder={placeholder}
        value={value}
        onChangeInstagramId={onChangeInstagramId}
        onChangeLink={onChangeLink}
      />
    </div>
  );
};

interface DropdownProps {
  placeholder: string[];
  options: string[];
  text: string;
  required: boolean;
  description?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dropdownValue: string;
  onChangeOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const DropDownInput = ({
  text,
  required = true,
  placeholder,
  description,
  options,
  value,
  onChange,
  dropdownValue,
  onChangeOption,
}: DropdownProps) => {
  return (
    <div className={cx(listTypeStyle())}>
      <TitleDescriptionGroup text={text} required={required} description={description!} />
      <DropDownList
        options={options}
        placeholder={placeholder[0]}
        value={value}
        onChange={onChange}
        dropdownValue={dropdownValue}
        onChangeOption={onChangeOption}
      />
    </div>
  );
};
