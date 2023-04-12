import styled from 'styled-components';
interface Props {
  isDragAccept: boolean;
  isDragReject: boolean;
}
const getColor = (props: Props) => {
  if (props.isDragAccept) {
    return '#2196f3';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  return '#eeeeee';
};

export const StyledDropZoneContainer = styled.div<Props>`
  cursor: pointer;
  position: absolute;
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  margin: auto;
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  width: 100%;
  height: 100%;

  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: transparent;
  color: #bdbdbd;
  outline: none;
  transition: border 0.5s;
  border-radius: 4px;
  @media (min-height: 760px) {
    & {
      max-height: 720px;
    }
  }
  @media (min-width: 1320px) {
    & {
      max-width: 1280px;
    }
  }
`;
