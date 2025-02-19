import { getMagazineDetail } from '@/entities/magazine/apis/apis';
import { css, cx } from '@/styled-system/css';
import { Typography } from '@ziine/design';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

import React, { ComponentProps } from 'react';
import { formatYYYYMMDDDate } from '@/shared/utils';
import { typographyStyle } from '@ziine/design';

type MarkdownProps = ComponentProps<typeof ReactMarkdown>;

export const markdownComponents: MarkdownProps['components'] = {
  h1: (props) => <h1 className={cx(typographyStyle({ level: 'heading1' }), css({ margin: '16px 0' }))} {...props} />,
  h2: (props) => <h2 className={cx(typographyStyle({ level: 'heading2' }), css({ margin: '14px 0' }))} {...props} />,
  h3: (props) => <h3 className={cx(typographyStyle({ level: 'heading3' }), css({ margin: '12px 0' }))} {...props} />,
  h4: (props) => <h4 className={cx(typographyStyle({ level: 'heading4' }), css({ margin: '10px 0' }))} {...props} />,
  h5: (props) => <h5 className={cx(typographyStyle({ level: 'heading5' }), css({ margin: '8px 0' }))} {...props} />,
  h6: (props) => <h6 className={cx(typographyStyle({ level: 'subtitle1' }), css({ margin: '6px 0' }))} {...props} />,
  p: (props) => <p className={cx(typographyStyle({ level: 'paragraph1' }), css({ margin: '16px 0' }))} {...props} />,
  a: (props) => <a className={css({ margin: '4px 0' })} {...props} />,
  ul: (props) => <ul className={css({ margin: '8px 0' })} {...props} />,
  ol: (props) => <ol className={css({ margin: '8px 0' })} {...props} />,
  li: (props) => <li className={css({ margin: '4px 0' })} {...props} />,
  blockquote: (props) => <blockquote className={css({ margin: '12px 0' })} {...props} />,
};

const MagazineDetail = async ({ id }: { id: number }) => {
  const { title, createdAt, thumbnailImageUrl, content } = await getMagazineDetail(id);

  const formattedCreatedAt = formatYYYYMMDDDate(createdAt);

  return (
    <div className={css({ padding: '24px 16px', width: '100%' })}>
      <div className={css({ marginBottom: '8px' })}>
        <Typography level='paragraph3' className={css({ color: 'grayscale.500', textAlign: 'left' })}>
          {formattedCreatedAt}
        </Typography>
      </div>
      <Typography level='heading3' className={css({ color: 'grayscale.0', textAlign: 'left' })}>
        {title}
      </Typography>
      <div className={css({ margin: '24px 0' })}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={343}
          height={197}
          src={thumbnailImageUrl}
          alt='매거진 썸네일'
          className={css({
            borderRadius: '8px',
            width: '100%',
            aspectRatio: '343 / 197',
            objectFit: 'cover',
          })}
        />
      </div>

      <ReactMarkdown
        className={cx(
          css({
            maxWidth: '100%',
            fontFamily: 'body',
            color: 'grayscale.0',
          }),
        )}
        components={markdownComponents}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MagazineDetail;
