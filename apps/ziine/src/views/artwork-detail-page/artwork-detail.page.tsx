import { ContactsType, getArtworkDetail } from '@/entities/artworks/apis/apis';
import { BaseImage } from '@/shared';
import { formatYYYYMMDDDate } from '@/shared/utils';
import { css } from '@/styled-system/css';
import { Divider, Icon, IconProps, Tag, Typography } from '@ziine/design';
import { ColorToken } from '@/styled-system/tokens';
import { LinkShareButton } from './link-share-button';
import { ContactShareButton } from './contact-share-button';

const getContactIcon = (type: ContactsType): { name: IconProps['name']; color?: ColorToken } => {
  switch (type) {
    case 'INSTAGRAM':
      return { name: 'instagram_color' };
    case 'WEBSITE':
      return { name: 'link', color: 'primary.500' };
    default:
      return { name: 'link', color: 'primary.500' };
  }
};

const getContactText = (type: ContactsType) => {
  switch (type) {
    case 'INSTAGRAM':
      return '인스타그램 아이디';
    case 'WEBSITE':
      return '링크';
    default:
      return '링크';
  }
};

interface Props {
  id: string;
}

const ArtworkDetailPage = async ({ id }: Props) => {
  const data = await getArtworkDetail(Number(id));

  return (
    <div className={css({ paddingBottom: '40px' })}>
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
          <LinkShareButton
            className={css({ marginLeft: '16px' })}
            title={data.title}
            url={data.shareUrl}
            text={data.shareUrl}
          />
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
            className={css({ borderRadius: '50%', objectFit: 'cover' })}
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
            {data.artist.contacts.map((contact) => {
              const contactIcon = getContactIcon(contact.type);
              return (
                <div
                  key={contact.type}
                  className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}
                >
                  <div className={css({ display: 'flex', alignItems: 'center' })}>
                    <div className={css({ width: '20px', height: '20px', marginRight: '8px' })}>
                      <Icon name={contactIcon.name} size='medium' color={contactIcon.color} />
                    </div>
                    <Typography level='paragraph2' className={css({ color: 'grayscale.600' })}>
                      {contact.value}
                    </Typography>
                  </div>

                  <ContactShareButton text={contact.value} targetText={getContactText(contact.type)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetailPage;
