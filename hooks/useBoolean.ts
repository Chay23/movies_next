import type { Dispatch, SetStateAction } from 'react';

import { useState } from 'react';

type UseBooleanOutput = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
};

export const useBoolean = (initialValue: boolean): UseBooleanOutput => {
  const [value, setValue] = useState(initialValue);

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  const toggle = () => {
    setValue(prevVal => !prevVal);
  };

  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggle,
  };
};
