import React from 'react';

import { SignType } from '../types';
import {
  AllButtons,
  BigButtonsContainer,
  Button,
  ButtonsContainer,
} from '../Shared.style';

interface ButtonsProps {
  setNumber: (num: number) => void;
  reset: VoidFunction;
  equal: VoidFunction;
  zero: (num: number) => void;
  decimal: (param: string) => void;
  operation: (param: SignType) => void;
}

export const Buttons: React.FC<ButtonsProps> = ({
  setNumber,
  reset,
  equal,
  zero,
  decimal,
  operation,
}) => (
  <AllButtons>
    <ButtonsContainer>
      <Button onClick={reset}>C</Button>
      <Button onClick={() => operation('/')}>/</Button>
      <Button onClick={() => operation('*')}>*</Button>

      <Button onClick={() => setNumber(7)}>7</Button>
      <Button onClick={() => setNumber(8)}>8</Button>
      <Button onClick={() => setNumber(9)}>9</Button>
      <Button onClick={() => setNumber(4)}>4</Button>
      <Button onClick={() => setNumber(5)}>5</Button>
      <Button onClick={() => setNumber(6)}>6</Button>
      <Button onClick={() => setNumber(1)}>1</Button>
      <Button onClick={() => setNumber(2)}>2</Button>
      <Button onClick={() => setNumber(3)}>3</Button>

      <Button onClick={() => zero(0)} width="true">
        0
      </Button>

      <Button onClick={() => decimal('.')}>.</Button>
    </ButtonsContainer>

    <BigButtonsContainer column="true">
      <Button classic="true" onClick={() => operation('-')}>
        -
      </Button>
      <Button height="true" onClick={() => operation('+')}>
        +
      </Button>
      <Button height="true" bgcolor="#e8315c" onClick={equal}>
        =
      </Button>
    </BigButtonsContainer>
  </AllButtons>
);
