import { CSSProperties } from 'react';
import { inputFatStyle, inputStyle, container, dropdownStyle, dropdownContainer } from './input.styles';
import { css, cx } from '@/styled-system/css';
import { Typography } from '../typography';

interface Props {
  placeholder: string;
  textCntVisible: boolean;
  style?: CSSProperties;
}

export const Input = ({ placeholder, style, textCntVisible }: Props) => {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
      <input type='text' className={cx(inputStyle())} placeholder={placeholder} style={style}></input>
      {textCntVisible && (
        <Typography level='paragraph4' className={css({ color: 'grayscale.500', textAlign: 'end' })}>
          00/00
        </Typography>
      )}
    </div>
  );
};

// input박스 크기 키워지면 input, 안되면 textarea로 변경하기
export const InputFat = ({ placeholder, style, textCntVisible }: Props) => {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
      <textarea className={cx(inputFatStyle())} placeholder={placeholder} style={style} />
      {textCntVisible && (
        <Typography level='paragraph4' className={css({ color: 'grayscale.500', textAlign: 'end' })}>
          00/00
        </Typography>
      )}
    </div>
  );
};

interface ImgInputProps {
  placeholder: string[];
  img: string[];
}

export const ImgInput = ({ placeholder, img }: ImgInputProps) => {
  return (
    <div className={cx(container())}>
      <div className={cx(inputStyle())}>
        <img src={img[0]}></img>
        <input placeholder={placeholder[0]}></input>
      </div>

      <div className={cx(inputStyle())}>
        <img src={img[1]}></img>
        <input placeholder={placeholder[1]}></input>
      </div>
    </div>
  );
};

interface DropdownProps {
  placeholder: string;
  options: string[];
}

export const DropDownList = ({ placeholder, options }: DropdownProps) => {
  return (
    <div className={cx(dropdownContainer())}>
      <input placeholder={placeholder} className={cx(inputStyle())} style={{ flex: 1 }}></input>
      <select className={cx(dropdownStyle())} defaultValue={options[0]}>
        <option value='option1'>{options[1]}</option>
        <option value='option2'>{options[2]}</option>
        <option value='option3'>{options[3]}</option>
      </select>
    </div>
  );
};
