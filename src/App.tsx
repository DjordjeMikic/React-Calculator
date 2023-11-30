import React, { useState } from 'react';

import { keys } from './helpers/keyboard';
import { SignType, StrorNum } from './types';
import { Buttons } from './components/Buttons';
import { Display } from './components/Display';
import { calculate } from './helpers/calculate';
import { Calculator, Flex } from './Shared.style';

const App = () => {
  const [first, setFirst] = useState<StrorNum>(0);
  const [second, setSecond] = useState<StrorNum>(0);
  const [sign, setSign] = useState<SignType>(null);

  const setNumber = (a) => {
    if (!first || first === second) {
      setFirst(a);
      return;
    }

    setFirst((prevState) => prevState.toString() + a.toString());
  };

  const operation = (a) => {
    if (!sign && !first && !second) return;

    if (!sign && first) {
      setSign(a);
      setSecond(first);
      setFirst(0);
    }

    if (sign && second) setSign(a);

    if (sign && second && first) {
      const res = calculate[sign](first, second);
      setFirst(res);
      setSecond(res);
    }
  };

  const zero = (a) => {
    if (!first || first === second) return;

    setFirst((prevState) => prevState.toString() + a.toString());
  };

  const decimal = (a) => {
    if (!first || first === second) {
      setFirst('0' + a);
      return;
    }

    setFirst((prevState) => prevState.toString() + a.toString());
  };

  const equal = () => {
    if (sign && second && first) {
      const res = calculate[sign](first, second);
      setSign(null);
      setFirst(res);
      setSecond(0);
    }
  };

  const reset = () => {
    setFirst(0);
    setSecond(0);
    setSign(null);
  };

  return (
    <Flex
      onKeyDown={(e) =>
        keys({
          e,
          setNumber,
          zero,
          decimal,
          equal,
          operation,
          reset,
        })
      }
      tabIndex={0}
    >
      <Calculator>
        <Display first={first} second={second} sign={sign} />

        <Buttons
          operation={operation}
          reset={reset}
          zero={zero}
          decimal={decimal}
          equal={equal}
          setNumber={setNumber}
        />
      </Calculator>
    </Flex>
  );
};

export default App;
