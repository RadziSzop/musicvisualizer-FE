import styled from 'styled-components';
interface StyledSelectContainerProps {
  isSelected: boolean;
}
export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
  width: 5rem;
  height: 5rem;
  margin: 0.5rem;
  padding: 0.25rem;
  border-radius: 1rem;
  border: 2px solid ${({ isSelected }) => (isSelected ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.5)')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
