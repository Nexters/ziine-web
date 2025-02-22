import '@/styles/global.css';

import { css } from '@/styled-system/css';
import type { Metadata } from 'next';
import { TanstackQueryProvider } from '@/shared/providers';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'ziine - 내 손 안의 미술 작품',
  description: '대학생 및 무명 작가들을 위한 미술품 큐레이션 서비스',
  openGraph: {
    title: 'ziine - 내 손 안의 미술 작품',
    description: '대학생 및 무명 작가들을 위한 미술품 큐레이션 서비스',
    url: 'https://www.ziine.gallery',
    images: [
      {
        url: '/assets/logo.png',
        width: 216,
        height: 216,
      },
    ],
  },
  twitter: {
    title: 'ziine - 내 손 안의 미술 작품',
    description: '대학생 및 무명 작가들을 위한 미술품 큐레이션 서비스',
    images: [
      {
        url: '/assets/logo.png',
        width: 216,
        height: 216,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
          //content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
        />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/icons/apple-icon.png' type='image/png' sizes='180x180' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/icons/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/icons/android-chrome-512x512.png' />
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
