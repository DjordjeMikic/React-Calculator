import React from 'react';

import { Operator } from '../types';

interface KeysParams {
  e: React.KeyboardEvent<HTMLDivElement>;
  setNumber: (param: number) => void;
  zero: (param: number) => void;
  decimal: (param: string) => void;
  equal: VoidFunction;
  operation: (param: Operator) => void;
  reset: VoidFunction;
}

export const keys = ({
  e,
  setNumber,
  zero,
  decimal,
  equal,
  operation,
  reset,
}: KeysParams) => {
  if (e.key.match(/[1-9]/g)) setNumber(parseInt(e.key));

  if (e.key === '0') zero(0);

  if (e.key === '.') decimal('.');

  if (e.key === 'Enter') equal();

  if (e.key.match(/[\+\-\*\/]/g)) operation(e.key as Operator);

  if (e.key === 'c') reset();
};
