'use client';

import { useSuspenseMagazineList } from '@/entities/magazine/apis/queries';
import { MagazineCard } from '@/entities/magazine/components/magazine-card';
import { css } from '@/styled-system/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Tag } from '@ziine/design';
// import { listItemStyle } from './magazine-list-page.styles';

export const MagazineListPage = () => {
  const {
    data: { magazines },
  } = useSuspenseMagazineList();

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '24px 0',
        width: '100%',
      })}
    >
      <Swiper
        spaceBetween={16}
        slidesPerView={3}
        centeredSlides={true}
        observer={true}
        observeParents={true}
        updateOnWindowResize={true}
        className={css({
          marginBottom: '48px',
          maxWidth: '860px',
          width: '100%',
          height: '100%',
        })}
        onSlideChange={({ activeIndex }) => {
          setActiveIndex(activeIndex);
        }}
      >
        {magazines.map((magazine) => (
          <SwiperSlide key={magazine.id}>
            <MagazineCard {...magazine} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Tag variant='orangeOutlined'>{`${activeIndex + 1}/${magazines.length}`}</Tag>
    </div>
  );
};
