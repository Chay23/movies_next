import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function useDebounceSWR<T>(fetchUrl: string, delay: number) {
  const [key, setKey] = useState<null | string>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setKey(fetchUrl), delay);

    return () => clearTimeout(timeout);
  }, [fetchUrl, delay]);

  return useSWR<T>(key);
}
