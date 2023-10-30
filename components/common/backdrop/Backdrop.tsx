import { ReactNode, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

type BackdropProps = {
  children: ReactNode;
  classes?: string;
};

const Backdrop = ({ children, classes }: BackdropProps) => {
  const ref = useRef<null | HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById('__next');
    setMounted(true);
  }, []);

  if (mounted && ref.current) {
    return createPortal(
      <div
        className={`w-full h-full flex fixed top-0 lef-0 bg-opacity-50 bg-gray-500 z-40 ${classes}`}>
        {children}
      </div>,
      document.getElementById('backdrop') as HTMLElement
    );
  }
};

export default Backdrop;
