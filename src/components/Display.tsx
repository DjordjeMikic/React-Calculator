import React from 'react';

import { SignType } from '../types';
import { BigScreen, Nums, SmScreen } from '../Shared.style';

interface DisplayProps {
  first: string | number;
  second: string | number;
  sign: SignType;
}

export const Display: React.FC<DisplayProps> = ({ first, second, sign }) => (
  <Nums>
    <SmScreen>
      {second ? (
        <p>
          {second} <span>{sign ? sign : ''}</span>
        </p>
      ) : (
        ''
      )}
    </SmScreen>

    <BigScreen>
      <p>{first || second}</p>
    </BigScreen>
  </Nums>
);
