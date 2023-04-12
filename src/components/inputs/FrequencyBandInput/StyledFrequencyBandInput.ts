import styled from 'styled-components';
interface StyledSelectContainerProps {
  isSelected: boolean;
}
export const StyledFrequencyOptionContainer = styled.div<StyledSelectContainerProps>`
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  padding: 0.25rem;
  border-radius: 1rem;
  border: 2px solid ${({ isSelected }) => (isSelected ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.4)')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border 0.3s;
`;
export const StyledFrequencySelectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 320px;
  @media (max-width: 450px) {
    width: 200px;
  }
`;
export const StyledFrequencyHeader = styled.h3`
  margin: 0px 0px 1rem 0px;
`;
