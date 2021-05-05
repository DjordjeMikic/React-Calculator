import PropTypes from 'prop-types';
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

Display.propTypes = {
  first: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  second: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  sign: PropTypes.string
}

export default Display;
