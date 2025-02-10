'use client';

import Image, { ImageProps } from 'next/image';

import useImgError from './useImgError';
import { baseImg } from './base-image.styles';
import { ReactNode } from 'react';
import { IMAGE_BLUR_DATA_URL } from './base-image.meta';
import { cx } from '@/styled-system/css';

interface Props extends Omit<ImageProps, 'placeholder' | 'blurDataURL' | 'key'> {
  width?: number;
  dimmed?: boolean;
  DimmedChildren?: ReactNode;
}

/**
 * @description 기본 이미지 컴포넌트(placeholder, blurDataURL 지정, onError 예외 처리, dimmed, DimmedChildren)
 * @param props BaseImage
 * @returns JSX.Element
 */
export const BaseImage = (props: Props) => {
  const { width, style, src, alt, className, ...rest } = props;

  const { imgKey, isImgFailed, handleError } = useImgError({ id: src + alt });

  const isPerformanceConsidered = width && width > 40;
  const placeholder = isPerformanceConsidered ? 'blur' : undefined;
  const blurDataURL = isPerformanceConsidered ? IMAGE_BLUR_DATA_URL : undefined;

  if (isImgFailed || !src) {
    const Fallback = (
      <span
        className={props.className}
        style={{
          display: 'inline-block',
          width,
          height: props.height,
          textAlign: 'center',
          lineHeight: `${props.height}px`,
          ...props.style,
        }}
      >
        X
      </span>
    );
    return Fallback;
  }

  const ImgComponent = (
    <Image
      onError={handleError}
      className={cx(baseImg, className)}
      {...{ width, src, alt, style }}
      {...rest}
      key={imgKey}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
    />
  );
  return ImgComponent;
};
