import { css } from '@/styled-system/css';
import { Popup, Typography } from '@ziine/design';

interface UndoPopupProps {
  onClickClose: () => void;
  onClickCancel: () => void;
}

export const UndoPopup = ({ onClickCancel, onClickClose }: UndoPopupProps) => {
  return (
    <>
      <Popup buttonText={[]} onClickOutlinedBtn={onClickClose} onClickFilledBtn={onClickCancel}>
        <Typography level='subtitle1' className={css({ color: 'grayscale.0' })}>
          이대로 나가시면, 작성 중인 내용은 저장되지 않습니다.
        </Typography>
        <Typography level='subtitle1' className={css({ color: 'grayscale.0' })}>
          그래도 나가시겠습니까?
        </Typography>
      </Popup>
    </>
  );
};
