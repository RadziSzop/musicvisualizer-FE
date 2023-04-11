import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  @media (max-width: 450px) {
    width: 210px;
  }
`;

export const StyledNumberInput = styled.input`
  height: 2rem;
  width: 120px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-radius: 2px;
    border: 2px solid #acacac;
  }
`;
export const StyledNumberInputHeader = styled.h3`
  margin: 0px 0px 1rem 0px;
`;
