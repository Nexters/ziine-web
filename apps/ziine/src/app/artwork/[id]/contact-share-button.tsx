'use client';

import { copyText } from '@/features/share/utils';
import { ToastBox } from '@/shared';
import { Tag } from '@ziine/design';
import { CSSProperties } from 'react';
import toast from 'react-hot-toast';

interface Props {
  text: string;
  className?: string;
  style?: CSSProperties;
  targetText: string;
}

export const ContactShareButton = ({ text, className, style, targetText }: Props) => {
  const onSuccess = () => {
    toast.success(<ToastBox text={`${targetText}가 복사되었습니다.`} />);
  };
  const onError = () => {
    toast.error(<ToastBox text={`${targetText} 복사에 실패했습니다.`} />);
  };

  const handleClick = () => {
    copyText({ text: text, onCopyError: onError, onCopySuccess: onSuccess });
  };

  return (
    <button onClick={handleClick} className={className} style={style}>
      <Tag variant='grayFilled'>복사하기</Tag>
    </button>
  );
};
