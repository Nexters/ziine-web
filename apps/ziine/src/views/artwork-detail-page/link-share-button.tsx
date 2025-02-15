'use client';

import { ShareButton } from '@/features/share/components';
import { ToastBox } from '@/shared';
import { CSSProperties } from 'react';
import toast from 'react-hot-toast';

interface Props {
  title: string;
  url: string;
  text: string;
  className?: string;
  style?: CSSProperties;
}

const toastId = 'linkShareToast';

export const LinkShareButton = ({ title, url, text, className, style }: Props) => {
  const onSuccess = () => {
    toast.success(<ToastBox text='링크가 복사되었습니다.' />, { id: toastId });
  };
  const onError = () => {
    toast.error(<ToastBox text='링크 복사에 실패했습니다.' />, { id: toastId });
  };

  return (
    <ShareButton
      className={className}
      style={style}
      title={title}
      url={url}
      text={text}
      onCopySuccess={onSuccess}
      onCopyError={onError}
    />
  );
};
