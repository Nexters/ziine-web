import { getArtworkDetail } from '@/entities/artworks/apis/apis';
import { BaseImage } from '@/shared';
import { formatYYYYMMDDDate } from '@/shared/utils';
import { css } from '@/styled-system/css';
import { Divider, Tag, Typography } from '@ziine/design';

const ArtworkDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await getArtworkDetail(Number(id));

  return (
    <div className={css({ marginBottom: '40px' })}>
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
          <div className={css({ marginLeft: '16px' })}>{/** @todo 공유하기 버튼, button tag로 바꾸기 */}</div>
        </div>

        <div
          className={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '8px' })}
        >
          <Tag variant='orangeOutlined'>작품 사이즈</Tag>
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
          <Tag variant='orangeOutlined'>재료</Tag>
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

      <div className={css({ padding: '24px 16px' })}>
        <Typography level='subtitle1' className={css({ color: 'grayscale.0' })}>
          작가 정보
        </Typography>

        <div
          className={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '40px' })}
        >
          <BaseImage
            width={28}
            height={28}
            src={data.artist.profileImageUrl}
            alt={data.artist.name}
            className={css({ borderRadius: '50%' })}
          />

          <div className={css({ marginLeft: '6px' })}>
            <Typography level='paragraph2' className={css({ color: 'grayscale.0' })}>
              {data.artist.name}
            </Typography>
          </div>
        </div>
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' })}>
          {data.artist.educations.map((education) => (
            <Tag key={education} variant='grayFilled'>
              {`#${education}`}
            </Tag>
          ))}
        </div>

        <div className={css({ margin: '40px 0 40px' })}>
          <Typography level='subtitle3' className={css({ color: 'grayscale.0', marginBottom: '16px' })}>
            작가 전시 이력
          </Typography>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '11px', margin: '16px 0 0' })}>
            {data.artist.exhibitions.map((exhibition) => (
              <div
                key={exhibition.title}
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  backgroundColor: 'grayscale.800',
                })}
              >
                <Typography level='paragraph4' className={css({ color: 'grayscale.500' })}>
                  {formatYYYYMMDDDate(exhibition.exhibitionDate)}
                </Typography>
                <Typography level='paragraph2' className={css({ color: 'grayscale.0' })}>
                  {exhibition.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Typography level='subtitle3' className={css({ color: 'grayscale.0', marginBottom: '16px' })}>
            더 많은 작품 활동
          </Typography>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
            {data.artist.contacts.map((contact) => (
              <div
                key={contact.type}
                className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}
              >
                <div className={css({ display: 'flex', alignItems: 'center' })}>
                  <div className={css({ width: '20px', height: '20px', marginRight: '8px' })}>
                    {/** @todo 아이콘 */}
                  </div>
                  <Typography level='paragraph2' className={css({ color: 'grayscale.600' })}>
                    {contact.type}
                  </Typography>
                </div>

                {/** @todo 복사하기 기능, button tag로 바꾸기 */}
                <div>
                  <Tag variant='grayFilled'>복사하기</Tag>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetailPage;
