import styled from 'styled-components';

const hoverGrey = props => props.theme.color.hoverGrey;

export const SelectWrap = styled.div`
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

  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;

  width: 100%;

  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;

  background-color: ${props => props.theme.color.white};

  padding: 20px 36px;

  cursor: pointer;

  &:hover,
  :focus,
  :focus:hover {
    background-color: ${hoverGrey};
  }

  p {
    font-family: 'Raleway', sans-serif;
    font-size: 1.125em;
    font-weight: 500;

    text-transform: uppercase;
  }
`;

export const ChevronDown = styled.img`
  margin-left: 10px;

  transition: 150ms ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? 'rotate(180deg)' : 'rotate(0deg)'};
`;
