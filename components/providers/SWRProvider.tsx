import type { ReactElement } from 'react';

import { SWRConfig } from 'swr';

import { SWRFetcher } from '@/services/api';

type Props = {
  children: ReactElement;
};

const SWRProvider = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 1800000,
        fetcher: SWRFetcher,
        revalidateOnFocus: false,
        revalidateOnMount: false,
      }}>
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
