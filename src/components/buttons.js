import React from 'react';
import { AllButtons, ButtonsContainer, BigButtonsContainer, Button } from '../styles';

const Buttons = ({ setNumber, cls, equal, cnt }) => {
  return (
    <AllButtons>
      <ButtonsContainer>
        <Button onClick={cls}>C</Button>
        <Button
          onClick={() => cnt('/')}>/</Button>
        <Button
          onClick={() => cnt('*')}>*</Button>
        <Button onClick={() => setNumber(7)}>7</Button>
        <Button onClick={() => setNumber(8)}>8</Button>
        <Button onClick={() => setNumber(9)}>9</Button>
        <Button onClick={() => setNumber(4)}>4</Button>
        <Button onClick={() => setNumber(5)}>5</Button>
        <Button onClick={() => setNumber(6)}>6</Button>
        <Button onClick={() => setNumber(1)}>1</Button>
        <Button onClick={() => setNumber(2)}>2</Button>
        <Button onClick={() => setNumber(3)}>3</Button>
        <Button width="true">0</Button>
        <Button>.</Button>
      </ButtonsContainer>
      <BigButtonsContainer column>
        <Button
          qu
          onClick={() => cnt('-')}
        >-</Button>
        <Button
          height="true"
          onClick={() => cnt('+')}
        >+</Button>
        <Button
          height="true"
          bgColor="#e8315c"
          onClick={equal}
        >=</Button>
      </BigButtonsContainer>
    </AllButtons>
  )
}

export default Buttons;
