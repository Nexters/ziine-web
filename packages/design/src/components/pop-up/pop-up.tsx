import { css, cx } from '@/styled-system/css';
import { SmallButton } from '../button';
import { Typography } from '../typography';
import { ReactNode } from 'react';
import { popupButtonsStyle, popupContainer, popupTitleStyle } from './pop-up.styles';

interface PopupProps {
  children: ReactNode;
  buttonText: string[];
  onClickOutlinedBtn: () => void;
  onClickFilledBtn: () => void;
}

export const Popup = ({ children, buttonText, onClickOutlinedBtn, onClickFilledBtn }: PopupProps) => {
  return (
    <div className={cx(popupContainer())}>
      <div className={cx(popupTitleStyle())}>{children}</div>
      <div className={cx(popupButtonsStyle())}>
        <SmallButton type='outlined' onClick={onClickOutlinedBtn}>
          <Typography level='paragraph3' className={css({ color: 'grayscale.0' })}>
            {buttonText[0]}
          </Typography>
        </SmallButton>
        <SmallButton onClick={onClickFilledBtn}>
          <Typography level='paragraph3' className={css({ color: 'grayscale.0' })}>
            {buttonText[1]}
          </Typography>
        </SmallButton>
      </div>
    </div>
  );
};
