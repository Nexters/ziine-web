import { getMagazineList } from '@/entities/magazine/apis/apis';
import { MagazineCard } from '@/entities/magazine/components/magazine-card';
import { css } from '@/styled-system/css';

export const MagazineListPage = async () => {
  const data = await getMagazineList();

  return (
    <div className={css({ margin: '24px 0', gap: '16px', display: 'flex' })}>
      {data.magazines.map((magazine) => (
        <MagazineCard
          key={magazine.id}
          {...magazine}
          className={css({ minWidth: '256px', maxWidth: '256px', height: 'fit-content' })}
        />
      ))}
    </div>
  );
};
