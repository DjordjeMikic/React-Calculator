import PropTypes from 'prop-types';
import {
  AllButtons,
  ButtonsContainer,
  BigButtonsContainer,
  Button
} from '../styles';

const Buttons = ({ setNumber, cls, equal, zero, decimal, cnt }) => {
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

        <Button
          onClick={() => zero(0)}
          width="true"
        >0</Button>

        <Button onClick={() => decimal('.')}>.</Button>
      </ButtonsContainer>

      <BigButtonsContainer column>
        <Button
          classic="true"
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

Buttons.propTypes = {
  setNumber: PropTypes.func.isRequired,
  cls: PropTypes.func.isRequired,
  equal: PropTypes.func.isRequired,
  zero: PropTypes.func.isRequired,
  decimal: PropTypes.func.isRequired,
  cnt: PropTypes.func.isRequired
}

export default Buttons;
