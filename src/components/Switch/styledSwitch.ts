import styled from 'styled-components';
interface StyledSelectContainerProps {
  isOn: boolean;
}
export const StyledSwitch = styled.div<StyledSelectContainerProps>`
  width: 80px;
  height: 50px;
  background-color: ${({ isOn }) => (isOn ? 'rgba(237, 193, 145, 1)' : 'rgba(255, 255, 255, 0.4)')};
  display: flex;
  justify-content: ${({ isOn }) => (isOn ? 'flex-end' : 'flex-start')};
  border-radius: 25px;
  padding: 5px;
  cursor: pointer;
`;
export const StyledHandle = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
`;
