import { Icon } from '../icon';
import { Typography } from '../typography';
import { imgButtonStyle, imgInputContainer } from './img-button.styles';
import { cx, css } from '@/styled-system/css';

interface Props {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | null;
}

export const ImgButton = ({ text, onChange, imagePreview }: Props) => {
  const handleClick = () => {
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    fileInput.click();
  };
  return (
    <div className={cx(imgInputContainer())}>
      <div className={cx(imgButtonStyle({ feature: 'upload' }))} onClick={handleClick}>
        <Icon name='upload' size='medium' color='grayscale.600' />
        <input
          type='file'
          accept='image/*'
          onChange={onChange}
          className={css({
            display: 'none',
          })}
          id='file-upload'
        ></input>
        <Typography level='paragraph3'>{text}</Typography>
      </div>
      {imagePreview && (
        <div className={cx(imgButtonStyle({ feature: 'preview' }))}>
          <img src={imagePreview} alt='artwork Preview' style={{ objectFit: 'cover' }} />
        </div>
      )}
    </div>
  );
};
