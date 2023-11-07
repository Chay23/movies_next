import { useLoadingSpinner } from '@/hooks/useLoadingSpinner';

import Backdrop from '../backdrop/Backdrop';
import Spinner from './Spinner';

const LoadingPageSpinner = () => {
  const { isLoading } = useLoadingSpinner();
  if (isLoading) {
    return (
      <Backdrop classes='flex items-center justify-center'>
        <Spinner />
      </Backdrop>
    );
  }
};

export default LoadingPageSpinner;
