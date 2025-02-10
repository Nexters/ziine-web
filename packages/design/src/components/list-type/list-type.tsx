import { CSSProperties } from 'react';
import { listTypeStyle } from './list-type.styles';
import { css, cx } from '@/styled-system/css';
import { Typography } from '../typography';
import { Input } from '../input';
import { ImgInput, InputFat } from '../input/input';

type InputType = 'thin' | 'fat';

interface Props {
  inputType?: InputType;
  type?: string;
  text: string;
  style?: CSSProperties;
  required: boolean;
  placeholder: string[];
  description?: string;
  textCntVisible?: boolean;
  icons?: string[];
}

export const ListType = ({
  inputType = 'thin',
  type = 'oneRegister',
  text,
  required = true,
  style,
  placeholder,
  description,
  textCntVisible = true,
}: Props) => {
  return (
    <div className={cx(listTypeStyle(type))}>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        })}
        style={style}
      >
        <Typography level='subtitle3' className={css({ color: 'grayscale.0' })}>
          {text}
        </Typography>
        <Typography
          level='paragraph2'
          className={css({
            color: required ? 'error.500' : 'grayscale.600',
          })}
        >
          {required ? '*' : '(선택)'}
        </Typography>
      </div>
      {description && (
        <Typography
          level='paragraph3'
          className={css({
            color: 'grayscale.600',
            mb: '-2px',
          })}
        >
          {description}
        </Typography>
      )}

      <div
        className={css({
          display: 'grid',
          gap: '8px',
          gridTemplateColumns: type === 'twoRegister' ? '1fr 1fr' : '1fr',
          width: '100%',
        })}
      >
        {inputType === 'fat' ? (
          <InputFat placeholder={placeholder[0]} textCntVisible={textCntVisible} />
        ) : (
          <Input placeholder={placeholder[0]} textCntVisible={textCntVisible} />
        )}
        {type === 'twoRegister' && <Input placeholder={placeholder[1]} textCntVisible={textCntVisible} />}
      </div>
    </div>
  );
};

export const ExhibitionInput = ({
  type = 'oneRegister',
  text,
  required = true,
  style,
  placeholder,
  description,
}: Props) => {
  return (
    <div className={cx(listTypeStyle(type))}>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        })}
        style={style}
      >
        <Typography level='subtitle3' className={css({ color: 'grayscale.0' })}>
          {text}
        </Typography>
        <Typography
          level='paragraph2'
          className={css({
            color: required ? 'error.500' : 'grayscale.600',
          })}
        >
          {required ? '*' : '(선택)'}
        </Typography>
      </div>
      {description && (
        <Typography
          level='paragraph3'
          className={css({
            color: 'grayscale.600',
            mb: '-2px',
          })}
        >
          {description}
        </Typography>
      )}
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        })}
      >
        <Typography level='paragraph2' className={css({ color: 'grayscale.300' })}>
          {text}
        </Typography>
        <Input placeholder={placeholder[0]} textCntVisible={false} />
        <Input placeholder={placeholder[1]} textCntVisible={false} />
        {/* 버튼 */}
      </div>
    </div>
  );
};

interface IconInputProps {
  text: string;
  required: boolean;
  placeholder: string[];
  description: string;
  icons: string[];
}

export const ExhibitionIconInput = ({ text, required = true, placeholder, description, icons }: IconInputProps) => {
  return (
    <div className={cx(listTypeStyle())}>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        })}
      >
        <Typography level='subtitle3' className={css({ color: 'grayscale.0' })}>
          {text}
        </Typography>
        <Typography
          level='paragraph2'
          className={css({
            color: required ? 'error.500' : 'grayscale.600',
          })}
        >
          {required ? '*' : '(선택)'}
        </Typography>
      </div>
      {description && (
        <Typography
          level='paragraph3'
          className={css({
            color: 'grayscale.600',
            mb: '-2px',
          })}
        >
          {description}
        </Typography>
      )}
      <ImgInput img={icons} placeholder={placeholder} />
    </div>
  );
};
