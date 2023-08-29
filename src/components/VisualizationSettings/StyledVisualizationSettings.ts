import styled from 'styled-components';
export const StyledVisualizationSettingsContainer = styled.div`
  margin-left: 200px;
  position: relative;
  display: grid;
  height: 90vh;
  flex-grow: 1;

  grid-template-columns: 1fr;

  @media (max-width: 600px) {
    margin-left: 56px;
  }

  & > div {
    padding-right: 1rem;
    padding-right: 1rem;
    overflow-x: auto;
    @media (max-width: 450px) {
      width: 245px;
    }
    @media (max-width: 320px) {
      margin-left: 2rem;
    }
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
  }
`;
