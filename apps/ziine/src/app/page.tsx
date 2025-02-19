import { css } from '@/styled-system/css';
import { MainPage } from '@/views/main-page';
import { GlobalNavBar } from '@/widgets';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className={css({ position: 'relative', height: '100%' })}>
      <Suspense>
        <GlobalNavBar className={css({ zIndex: 1, position: 'sticky', top: 0 })} />
      </Suspense>
      <Suspense>
        <MainPage />
      </Suspense>
    </div>
  );
}
