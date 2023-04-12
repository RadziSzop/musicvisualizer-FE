import styled from 'styled-components';

export const StyledVisualizationSavedSettingsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  margin-left: 7rem;
  display: flex;
  align-items: center;
  max-width: calc(100vh - 400px);
  overflow-x: auto;
  ::-webkit-scrollbar {
    height: 6px;
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

export const StyledVisualizationSavedSettingsItem = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  margin: 0.25rem;
  background-color: #4a4a4a;
  border-radius: 8px;
`;
