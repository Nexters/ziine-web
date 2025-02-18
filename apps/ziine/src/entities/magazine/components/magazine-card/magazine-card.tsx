import { css, cx } from '@/styled-system/css';
import { Typography } from '@ziine/design';
import Link from 'next/link';
import { CSSProperties } from 'react';

const textEllipsisStyle: CSSProperties = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
};

interface Props {
  id: number;
  className?: string;
  style?: CSSProperties;
  title: string;
  summary: string;
  thumbnailImageUrl: string;
  backgroundColor: string;
  keywords: string[];
}

export const MagazineCard = ({
  id,
  className,
  style,
  title,
  summary,
  thumbnailImageUrl,
  backgroundColor,
  keywords,
}: Props) => {
  return (
    <Link href={`/magazine/${id}`}>
      <div
        className={cx(css({ padding: '16px', borderRadius: '18.493px' }), className)}
        style={{ ...style, backgroundColor }}
      >
        <Typography
          level='heading4'
          style={textEllipsisStyle}
          className={css({ overflow: 'hidden', textOverflow: 'ellipsis', WebkitLineClamp: 2 })}
        >
          {title}
        </Typography>
        <div
          style={textEllipsisStyle}
          className={css({ margin: '8px 0', overflow: 'hidden', textOverflow: 'ellipsis', WebkitLineClamp: 2 })}
        >
          <Typography level='paragraph3'>{summary}</Typography>
        </div>
        <div className={css({ display: 'flex', gap: '4px', flexWrap: 'wrap', margin: '16px 0 12px' })}>
          {keywords.map((keyword) => (
            <div
              key={keyword}
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px 10px',
                borderRadius: '99px',
                backgroundColor: 'transparent',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'grayscale.900',
              })}
            >
              <Typography level='paragraph4'>#{keyword}</Typography>
            </div>
          ))}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={css({ width: '100%', aspectRatio: '1 / 1', borderRadius: '16px', objectFit: 'cover' })}
          src={thumbnailImageUrl}
          alt={title}
          width={256}
          height={256}
        />
      </div>
    </Link>
  );
};
