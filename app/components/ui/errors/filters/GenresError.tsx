import type { HTMLAttributes } from 'react';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

type Props = {
  wrapperClasses: HTMLAttributes<HTMLDivElement>['className'];
};

export default function GenresError({ wrapperClasses }: Props) {
  return (
    <div className={wrapperClasses}>
      <ErrorOutlineIcon fontSize='large' className='mb-5'/>
      <p>Failed to load genres.</p>
      <p> Please reload the page.</p>
      <p className='text-xs mt-4'>If the error persists, contact us.</p>
    </div>
  );
}
