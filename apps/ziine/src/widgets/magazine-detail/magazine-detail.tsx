import { getMagazineDetail } from '@/entities/magazine/apis/apis';
import { BaseImage } from '@/shared/components';
import { css } from '@/styled-system/css';
import { Typography } from '@ziine/design';

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
          fill
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

      {/** 백엔드에서 데이터를 string으로 마크다운을 보낼거야. 이걸 렌더링해줘 */}
      {content}
    </div>
  );
};

export default MagazineDetail;
