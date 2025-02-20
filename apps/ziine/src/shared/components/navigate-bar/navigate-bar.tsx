'use client';

import { onRaf } from '@/shared/utils';
import { css, cx } from '@/styled-system/css';
import { Divider, Icon } from '@ziine/design';
import { useRouter } from 'next/navigation';
import React, { CSSProperties } from 'react';
import { navigateBarStyle } from './navigate-bar.styles';

interface NavigateBarProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export const NavigateBar = ({ className, style, onClick }: NavigateBarProps) => {
  const router = useRouter();
  const goBack = () => router.back();
  const isScrolled = useNavigateBarScroll();

  return (
    <div className={cx(navigateBarStyle({ isScrolled }), className)} style={style}>
      <div className={css({ padding: '8px 16px 16px' })}>
        <button onClick={onClick ? onClick : goBack}>
          <Icon name='direction_left' size='medium' color='grayscale.0' />
        </button>
      </div>
      {isScrolled && <Divider thickness='thin' />}
    </div>
  );
};

const useNavigateBarScroll = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = onRaf(() => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
};
