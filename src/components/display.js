import React from 'react';
import { Nums, SmScreen, BigScreen } from '../styles';

const Display = ({ first, second, sign }) => {
  return (
    <Nums>
      <SmScreen>
        {second ? (
          <p>{second} <span>{sign ? sign : ''}</span></p>
        ) : ''}
      </SmScreen>
      <BigScreen>
        <p>{first || second}</p>
      </BigScreen>
    </Nums>
  )
}

export default Display;
