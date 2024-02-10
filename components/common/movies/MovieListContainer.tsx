import type { api } from '@/typings/api';

import Error from '@/components/error/Error';
import Spinner from '../spinner/Spinner';
import { ReactNode } from 'react';

type Props = {
  isLoading: boolean;
  error: api.ErrorResponse;
  children: ReactNode;
};

const MovieListContainer = ({ isLoading, error, children }: Props) => {
  if (error) {
    const { status, info } = error;
    return <Error status={status} info={info} />;
  }

  if (isLoading) {
    return (
      <div className='flex justify-center items-center'>
        <Spinner />
      </div>
    );
  }

  return children;
};

export default MovieListContainer;
