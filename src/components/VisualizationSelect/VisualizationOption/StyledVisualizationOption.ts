import styled from 'styled-components';

export const StyledVisualizationOptionContainer = styled.div`
  padding: 0.2rem 0.4rem;
  background-color: #242424;
  /* background-color: #b7ba9d; */
  border-radius: 0.65rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const StyledVisualizationOptionHeader = styled.p`
  font-size: 1.2rem;
  margin: 0;
  font-weight: bold;
  /* color: #242424; */
  color: #dbdcd1;
  @media (max-width: 400px) {
    display: none;
  }
`;
