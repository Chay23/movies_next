import { ReactElement } from 'react';
import { SWRConfig } from 'swr';

type Props = {
  children: ReactElement;
};

// handle response errros
const fetcher = (...args: [any]) =>
  fetch(...args).then(res => {
    return res.json();
  });

const SWRProvider = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 1800000,
        fetcher,
        revalidateOnFocus: false,
        revalidateOnMount: false,
      }}>
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
