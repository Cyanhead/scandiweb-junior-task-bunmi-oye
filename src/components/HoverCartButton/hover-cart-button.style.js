import styled from 'styled-components';
const primary = props => props.theme.color.primary;

export const Wrap = styled.div`
  position: absolute;
  right: ${({ enlarge }) => (enlarge ? 0 : '15px')};
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ enlarge }) => (enlarge ? 'white' : primary)};

  width: ${({ enlarge }) => (enlarge ? '100%' : '52px')}; // experimental
  height: ${({ enlarge }) => (enlarge ? '100%' : '52px')}; // experimental
  margin-bottom: ${({ enlarge }) => (enlarge ? '0' : '-26px')}; // experimental
  border-radius: ${({ enlarge }) => (enlarge ? '0' : '50%')}; // experimental

  transition: 200ms ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

export const AttrSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const Top = styled.div``;

export const IconWrap = styled.div`
  display: flex;
`;

export const ArrowWrap = styled.div`
  padding: 8px;

  transition: 150ms ease-in-out;

  &:hover {
    background-color: ${props => props.theme.color.blackAlphaHover};
  }
`;

export const Icon = styled.img`
  width: ${props => props.width || '24px'};
  height: ${props => props.width || '24px'};
`;
