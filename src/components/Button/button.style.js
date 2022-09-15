import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.bg || props.theme.color.primary};
  color: ${props => props.fg || props.theme.color.white};

  width: ${props => props.width || ' 100%'};
  height: ${props => props.height || ''};
  padding: ${props => props.pad || '14px'};
  border: ${props => props.border || 'none'};
  outline: none;

  font-size: ${props => props.fontSize || '1em'};
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;
  transition: 150ms ease-in-out;

  &:hover {
    background-color: ${props =>
      props.bgHover || props.theme.color.primaryHover};
  }

  &:active {
    background-color: ${props =>
      props.bgActive || props.theme.color.primaryActive};
  }
`;

export const ButtonLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
