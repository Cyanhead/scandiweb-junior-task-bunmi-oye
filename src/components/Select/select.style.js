import styled from 'styled-components';

export const SelectWrap = styled.div`
  position: ${({ anchor }) => (anchor ? 'initial' : 'relative')};
  margin: 0;
`;

export const SelectButton = styled.button`
  display: flex;
  align-items: baseline;

  background-color: inherit;
  color: inherit;

  padding: 16px;
  border: none;
  outline: none;

  font-family: 'Raleway', sans-serif;
  font-size: 1.125em;
  font-weight: 500;

  text-transform: ${props => props.selectCase || 'capitalize'};

  cursor: pointer;
  transition: 0.3s ease;

  p {
    width: 14.4px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 65px;
  right: 0;
  z-index: 2;

  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;

  width: 100%;
  max-height: 60vh;
  overflow-y: auto;

  box-shadow: ${props => props.theme.boxShadow};
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;

  background-color: ${props => props.theme.color.white};

  padding: 20px 36px;

  text-transform: ${props => props.optionCase || 'capitalize'};

  cursor: pointer;

  &:hover,
  :focus,
  :focus:hover {
    background-color: ${props => props.theme.color.hoverGrey};
  }

  p {
    font-family: 'Raleway', sans-serif;
    font-size: 1.125em;
    font-weight: 500;

    text-transform: uppercase;
  }
`;

export const ChevronDown = styled.img`
  margin-left: ${props => props.arrowML || '10px'};

  width: ${props => props.arrowW || ''};
  height: auto;

  transition: 150ms ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? 'rotate(180deg)' : 'rotate(0deg)'};
`;
