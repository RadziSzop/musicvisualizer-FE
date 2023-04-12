import styled from 'styled-components';
interface StyledPositionInputDirectionProps {
  position: 't' | 'l' | 'c' | 'r' | 'b';
  isEnabled: boolean;
}
export const StyledPositionInputContainer = styled.div`
  display: grid;
  grid-template:
    '. t .' 40px
    'l c r' 40px
    '. b .' 40px
    / 40px 40px 40px;
  gap: 8px;
`;

export const StyledPositionInputDirection = styled.div<StyledPositionInputDirectionProps>`
  grid-area: ${({ position }) => position};
  width: 100%;
  height: 100%;
  & > svg {
    fill: ${({ isEnabled }) => (isEnabled ? '#474646' : '')};
    transition: fill 0.2s;
  }
`;
export const StyledPositionInputHeader = styled.h3`
  margin: 0px 0px 1rem 0px;
`;
