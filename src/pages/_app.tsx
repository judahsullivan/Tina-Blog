import Preloader from '@/components/animations/preloader';
import AppLayout from '@/components/layouts/AppLayout';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ThemeProvider enableSystem={true} storageKey="theme" attribute="class">
      {isLoading ? (
        <Preloader onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      )}
    </ThemeProvider>
  );
}
