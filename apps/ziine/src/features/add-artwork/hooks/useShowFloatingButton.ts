'use client';

import { onRaf } from '@/shared/utils';
import { useRef, useEffect, useState } from 'react';

export const useShowFloatingButton = () => {
  const [showButton, setShowButton] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = onRaf(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShowButton(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowButton(true);
      }

      lastScrollY.current = currentScrollY;
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showButton;
};
