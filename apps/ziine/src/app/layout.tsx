import '@/styles/global.css';

import { css } from '@/styled-system/css';
import type { Metadata } from 'next';
import { TanstackQueryProvider } from '@/shared/providers';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'ziine - 내 손 안의 미술 작품',
  description: '대학생 및 무명 작가들을 위한 미술품 큐레이션 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={css({ height: '100%' })}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
      </head>
      <body className={css({ bg: 'grayscale.900' })}>
        <Toaster
          toastOptions={{
            style: {
              background: 'transparent',
              boxShadow: 'none',
              padding: 0,
              margin: 0,
            },
            success: { icon: null },
            error: { icon: null },
            loading: { icon: null },
          }}
        />
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}
