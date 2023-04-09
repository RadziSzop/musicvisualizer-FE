import styled from 'styled-components';
export const ColorInputContainer = styled.div`
margin-top: 30px
  display: flex;
`;
export const ColorInputSettingsContainer = styled.div`
  margin-top: 30px;
  cursor: pointer;
`;
export const ColorInputButtonGroupContainer = styled.div`
  width: 240px;
  height: 60px;
  border-radius: 1.4rem;
  display: grid;
  margin-top: 1rem;
  z-index: 2;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  position: relative;
  & > input {
    outline: none;
    border: none;
    background-color: #2e2e2e;
  }
`;
interface ColorPickerProps {
  width: string;
  height: string;
  borderRadius?: string;
  margin?: string;
}
export const ColorPicker = styled.input<ColorPickerProps>`
  /* display: block; */
  margin: ${({ margin }) => margin || '0.5rem 0px'};
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  z-index: 1;
  appearance: none;
  background-color: transparent;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  cursor: pointer;

  &::-webkit-color-swatch {
    border-radius: ${({ borderRadius }) => borderRadius || '3rem'};
    border: none;
  }
  &::-moz-color-swatch {
    border-radius: ${({ borderRadius }) => borderRadius || '3rem'};
    border: none;
  }
`;
interface ColorInputGradientProps {
  backgroundColor: string;
  rotate: number;
}
export const ColorInputGradient = styled.div<ColorInputGradientProps>`
  margin: 1rem 0px;
  border-radius: 3rem;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(
    ${({ rotate }) => rotate + 90 || 0}deg,
    ${({ backgroundColor }) => backgroundColor}
  );
`;
/* background-image: linear-gradient(30deg, rgb(57, 24, 71) , rgb(106, 22, 201)); */
// background-image: linear-gradient(${({ rotation }) => '30'}deg, ${({ backgroundColor }) => backgroundColor});
