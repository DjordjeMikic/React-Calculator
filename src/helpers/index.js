const calculate = (first, second, sign) => {
  switch(sign) {
    case '+':
      return parseFloat(second) + parseFloat(first);
    case '-':
      return parseFloat(second) - parseFloat(first);
    case '/':
      return parseFloat(second) / parseFloat(first);
    case '*':
      return parseFloat(second) * parseFloat(first);
    default:
      throw new Error();
  }
}

export default calculate;
