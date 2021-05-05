import React, { useState } from 'react';
import { Flex, Calculator } from './styles';
import Display from './components/display';
import Buttons from './components/buttons';

import calculate from './helpers';
import "./App.css";

const App = () => {
  let [first, setFirst] = useState(0);
  let [second, setSecond] = useState(0);
  let [sign, setSign] = useState(null);

  const setNumber = (a) => {
    if(!first || first === second) {
      setFirst(a);
      return;
    }
    setFirst(prevState => prevState.toString() + a.toString());
  }

  const cnt = (a) => {
    if(!sign && !first && !second) return;
    if(!sign && first) {
      setSign(a);
      setSecond(first);
      setFirst(0);
    }
    if(sign && second) {
      setSign(a);
    }

    if(sign && second && first) {
      let res = calculate(first, second, sign);
      console.log(res);
      // setSign(null);
      setFirst(res);
      setSecond(res);
    }
  }

  const equal = () => {
    if(sign && second && first) {
      let res = calculate(first, second, sign);
      setSign(null);
      setFirst(res);
      setSecond(res);
    }
  }

  const cls = () => {
    setFirst(0);
    setSecond(0);
    setSign(null);
  }

  return (
    <Flex>
      <Calculator>
        <Display
          first={first}
          second={second}
          sign={sign}
        />
        <Buttons cnt={cnt} cls={cls} equal={equal} setNumber={setNumber} />
      </Calculator>
    </Flex>
  )
}

export default App;
