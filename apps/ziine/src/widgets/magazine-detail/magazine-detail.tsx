import { getMagazineDetail } from '@/entities/magazine/apis/apis';
import { BaseImage } from '@/shared/components';
import { css, cx } from '@/styled-system/css';
import { Typography } from '@ziine/design';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

import React, { ComponentProps } from 'react';
import { typographyStyle } from '@ziine/design';

type MarkdownProps = ComponentProps<typeof ReactMarkdown>;

export const markdownComponents: MarkdownProps['components'] = {
  h1: (props) => <h1 className={typographyStyle({ level: 'heading1' })} {...props} />,
  h2: (props) => <h2 className={typographyStyle({ level: 'heading2' })} {...props} />,
  h3: (props) => <h3 className={typographyStyle({ level: 'heading3' })} {...props} />,
  h4: (props) => <h4 className={typographyStyle({ level: 'heading4' })} {...props} />,
  h5: (props) => <h5 className={typographyStyle({ level: 'heading5' })} {...props} />,
  h6: (props) => <h6 className={typographyStyle({ level: 'subtitle1' })} {...props} />,
  p: (props) => <p className={typographyStyle({ level: 'paragraph1' })} {...props} />,
  a: (props) => <a className='custom-link' {...props} />,
  ul: (props) => <ul className='custom-ul' {...props} />,
  ol: (props) => <ol className='custom-ol' {...props} />,
  li: (props) => <li className='custom-li' {...props} />,
  blockquote: (props) => <blockquote className='custom-blockquote' {...props} />,
};

const MagazineDetail = async ({ id }: { id: number }) => {
  const { title, createdAt, thumbnailImageUrl, content } = await getMagazineDetail(id);

  const formattedCreatedAt = new Date(createdAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <div className={css({ padding: '24px 16px' })}>
      <div className={css({ marginBottom: '8px' })}>
        <Typography level='paragraph3' className={css({ color: 'grayscale.500', textAlign: 'left' })}>
          {formattedCreatedAt}
        </Typography>
      </div>
      <Typography level='heading3' className={css({ color: 'grayscale.0', textAlign: 'left' })}>
        {title}
      </Typography>
      <div className={css({ margin: '24px 0' })}>
        <BaseImage
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
