import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavMenuContainer = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  right: 0;
  padding: 0.5rem;
`;

export const StyledNavMenuLink = styled(Link)`
  color: #e3e3e3;
`;
