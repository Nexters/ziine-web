import { cva } from 'styled-system/css';

export const popupContainer = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
});

export const popupTitleStyle = cva({
  base: {
    bg: 'grayscale.800',
    borderTopRadius: '12px',
    width: '360px',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    gap: '8px',
  },
});

export const popupButtonsStyle = cva({
  base: {
    bg: 'grayscale.800',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    borderBottomRadius: '12px',
    width: '360px',
    padding: '12px 16px 16px 16px',
  },
});
