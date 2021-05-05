import styled, { css } from 'styled-components';

export const Flex = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AllButtons = styled.div`
  height: 72%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Calculator = styled.div`
  height: 75vh;
  width: 28%;
  border-radius: 6px;
  padding: 4px;
  background-color: blue;
`;

export const Nums = styled.div`
  height: 28%;
  width: 100%;
  border-radius: 6px;
  padding: 6px;
  background-color: #fafafa;
`;

export const SmScreen = styled.div`
  height: 46%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.75rem;
  background-color: lightblue;
`;

export const BigScreen = styled.div`
  height: 54%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2.9rem;
  background-color: aqua;
`;

export const ButtonsContainer = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: #f4f4f4;
`;

export const BigButtonsContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.column && css`
    flex-direction: column;
  `}
`;
export const Button = styled.button`
  height: 20%;
  flex: 0 0 33.33%;
  font-size: 1.2rem;
  border: 1px solid lightblue;
  outline: none;
  background-color: #272727;
  color: #fafafa;
  transition: all 0.4s;

  ${props => props.height && css`
    width: 100%;
    flex: 0 0 40%;
  `}

  ${props => props.qu && css`
    width: 100%;
    flex: 0 0 20%;
  `}

  ${props => props.width && css`
    flex: 0 0 66.66%;
  `}

  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `}

  &:hover {
    opacity: 0.75;
  }
`;
