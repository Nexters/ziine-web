import { BaseImage } from '@/shared';
import { css, cx } from '@/styled-system/css';
import { Typography } from '@ziine/design';
import Link from 'next/link';
import { CSSProperties } from 'react';

interface Props {
  id: number;
  profileImageUrl: string;
  profileName: string;
  title: string;
  imageUrl: string;
  className?: string;
  style?: CSSProperties;
}

const textEllipsisStyle: CSSProperties = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
};

export const ArtImageCard = ({ id, profileImageUrl, profileName, title, imageUrl, className, style }: Props) => {
  return (
    <Link
      href={`/artwork/${id}`}
      className={cx(
        css({
          overflow: 'hidden',
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          borderRadius: '16px',
          border: '1.5px solid rgba(255, 255, 255, 0.1)',
        }),
        className,
      )}
      style={style}
    >
      <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
        <BaseImage
          width={400}
          height={400}
          src={imageUrl}
          alt={title + '작품 사진'}
          className={css({
            aspectRatio: '1 / 1',
            objectFit: 'contain',
          })}
        />
      </div>

      <div
        className={css({
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
        })}
      >
        <BaseImage
          width={28}
          height={28}
          src={profileImageUrl}
          alt={profileName + '작가 사진'}
          className={css({
            borderRadius: '999px',
            border: '1.5px solid rgba(0, 0, 0, 0.10)',
          })}
        />
        <div className={css({ marginLeft: '6px' })}>
          <Typography level='paragraph2' className={css({ color: 'grayscale.0' })}>
            {profileName}
          </Typography>
        </div>
      </div>

      <div
        style={textEllipsisStyle}
        className={css({
          position: 'absolute',
          bottom: 0,
          left: 0,
          padding: '20px',
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color: 'grayscale.0',
          WebkitLineClamp: 2,
          bg: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%)',
        })}
      >
        <Typography
          level='heading4'
          style={textEllipsisStyle}
          className={css({
            textAlign: 'left',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: 'grayscale.0',
            WebkitLineClamp: 2,
          })}
        >
          {title}
        </Typography>
      </div>
    </Link>
  );
};
