import { forwardRef, type HTMLAttributes } from 'react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

type Props = {
  disabled: Boolean;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  onClick: () => void;
};

export default function Arrow({ disabled, className, onClick }: Props) {
  return (
    <button
      className={`flex items-center justify-center p-2 rounded-full ${
        disabled ? 'bg-blue-200 text-text-secondary' : 'bg-blue-500'
      } ${className}`}>
      <KeyboardArrowLeftIcon className='scale-125' onClick={onClick} />
    </button>
  );
}
