import styled from 'styled-components';

export const StyledRecordButton = styled.div`
  position: fixed;
  padding: 0.5rem;
  top: 0;
  left: 0;
  filter: brightness(100%);
  &:hover {
    animation-name: pingPong;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  @keyframes pingPong {
    0% {
      filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);
    }
    50% {
      filter: invert(55%) sepia(14%) saturate(23) hue-rotate(-45deg) brightness(119%) contrast(86%);
    }
    100% {
      filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);
    }
  }
`;
