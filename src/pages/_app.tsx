import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { CssVarsProvider } from '@mui/joy/styles';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <CssVarsProvider>
        <Component {...pageProps} />
      </CssVarsProvider>
    </SessionProvider>
  );
}
