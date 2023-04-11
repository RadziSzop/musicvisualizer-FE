import styled from 'styled-components';
interface StyledSelectContainerProps {
  x?: number;
}
export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
  width: 200px;
  height: 100vh;
  background: #242424;
  /* background: #b7ba9d; */
  position: fixed;
  left: 0;
  top: 0;
  padding: 5vh 0.65rem;
  @media (max-width: 600px) {
    width: 46px;
    padding: 5vh 2px;
  }
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #242424;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #555555;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #606060;
  }

  ::-webkit-scrollbar-track {
    background-color: #323232;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track:hover {
    background-color: #363636;
  }
`;
