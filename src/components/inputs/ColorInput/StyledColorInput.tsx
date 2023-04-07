import styled from 'styled-components';

export const ColorInputButtonGroupContainer = styled.div`
  width: 320px;
  height: 60px;
  border-radius: 1.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  & > input {
    outline: none;
    border: none;
    background-color: #2e2e2e;
  }
`;
export const ColorPicker = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  width: 320px;
  height: 60px;
  border: none;
  cursor: pointer;

  &::-webkit-color-swatch {
    border-radius: 3rem;
    border: none;
  }
  &::-moz-color-swatch {
    border-radius: 3rem;
    border: none;
  }
`;
