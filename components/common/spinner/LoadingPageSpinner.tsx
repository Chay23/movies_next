import { useLoadingSpinner } from '@/hooks/useLoadingSpinner';
import Backdrop from '../backdrop/Backdrop';

const LoadingPageSpinner = () => {
  const { isLoading } = useLoadingSpinner();
  if (isLoading) {
    return (
      <Backdrop classes='flex items-center justify-center'>
        <div className='inline-block animate-spin border-8 rounded-full border-gray-400 border-b-transparent md:border-16 w-20 h-20 lg:w-40 lg:h-40 md:w-28 md:h-28' />
      </Backdrop>
    );
  }
};

export default LoadingPageSpinner;
