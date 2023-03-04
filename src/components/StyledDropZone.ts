import styled from 'styled-components';
interface Props {
  isFocused: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
}
const getColor = (props: Props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isFocused) {
    return '#2196f3';
  }
  return '#eeeeee';
};

export const StyledDropZoneContainer = styled.div<Props>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 400px;
  height: 275px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: transparent;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;
