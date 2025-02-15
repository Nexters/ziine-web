'use client';

import { css } from '@/styled-system/css';
import { cx } from '@/styled-system/css';
import { Icon } from '@ziine/design';
import React from 'react';
import { shareContent } from '../../utils';
import { ColorToken } from '@/styled-system/tokens';

interface ShareButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: ColorToken;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  url: string;
  text: string;
  onCopySuccess?: () => void;
  onCopyError?: () => void;
}

export const ShareButton = ({
  color = 'grayscale.0',
  className,
  style,
  title,
  url,
  text,
  onCopySuccess,
  onCopyError,
  ...props
}: ShareButtonProps) => {
  const handleClick: ShareButtonProps['onClick'] = (e) => {
    props.onClick?.(e);
    shareContent({ title, url, text, onCopySuccess, onCopyError });
  };

  return (
    <button className={cx(css({ padding: '6px' }), className)} style={style} {...props} onClick={handleClick}>
      <Icon name='share' size='medium' color={color} />
    </button>
  );
};
