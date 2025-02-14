import { getArtworkDetail } from '@/entities/artworks/apis/apis';
import { BaseImage } from '@/shared';
import { css } from '@/styled-system/css';
import { Divider, Tag, Typography } from '@ziine/design';

const ArtworkDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await getArtworkDetail(Number(id));

  return (
    <div>
      {/** @todo 뒤로가기 버튼 */}
      <BaseImage
        width={375}
        height={375}
        src={data.artworkImageUrl}
        alt={data.title}
        className={css({
          width: '100%',
          aspectRatio: '375 / 375',
          objectFit: 'cover',
        })}
      />
      <div className={css({ padding: '24px 16px' })}>
        <div
          className={css({
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '20px',
          })}
        >
          <Typography level='heading4' className={css({ color: 'grayscale.0' })}>
            {data.title}
          </Typography>
          <button className={css({ marginLeft: '16px' })}>{/** @todo 공유하기 버튼 */}</button>
        </div>

        <div
          className={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '8px' })}
        >
          <Tag variant='primary'>작품 사이즈</Tag>
          <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '8px' })}>
            <Typography level='paragraph3' className={css({ color: 'grayscale.500' })}>{`${data.width}cm`}</Typography>
            <div className={css({ margin: '0 2px', display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
              <Typography level='paragraph3' className={css({ color: 'grayscale.500' })}>
                x
              </Typography>
            </div>
            <Typography level='paragraph3' className={css({ color: 'grayscale.500' })}>{`${data.height}cm`}</Typography>
          </div>
        </div>

        <div
          className={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' })}
        >
          <Tag variant='primary'>재료</Tag>
          <div className={css({ marginLeft: '8px' })}>
            <Typography level='paragraph3' className={css({ color: 'grayscale.500' })}>
              {data.material}
            </Typography>
          </div>
        </div>

        <Typography level='paragraph2' className={css({ color: 'grayscale.0' })}>
          {data.description}
        </Typography>
      </div>

      <Divider thickness='thin' className={css({ margin: '16px' })} />
    </div>
  );
};

export default ArtworkDetailPage;
