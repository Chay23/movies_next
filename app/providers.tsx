'use client';

import SWRProvider from '@/providers/SWRProvider';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SWRProvider>
  );
};

export default Providers;
