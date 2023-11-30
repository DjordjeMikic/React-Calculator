import { StrorNum } from '../types';

type CalculateFunction = (first: StrorNum, second: StrorNum) => number;

interface CalculateType {
  '+': CalculateFunction;
  '-': CalculateFunction;
  '*': CalculateFunction;
  '/': CalculateFunction;
}

export const calculate: CalculateType = {
  '+': (first: StrorNum, second: StrorNum) =>
    parseFloat(second as string) + parseFloat(first as string),
  '-': (first: StrorNum, second: StrorNum) =>
    parseFloat(second as string) - parseFloat(first as string),
  '*': (first: StrorNum, second: StrorNum) =>
    parseFloat(second as string) * parseFloat(first as string),
  '/': (first: StrorNum, second: StrorNum) =>
    parseFloat(second as string) / parseFloat(first as string),
};
