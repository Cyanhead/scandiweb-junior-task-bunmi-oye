import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  right: 15px;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.color.primary};

  width: 52px;
  height: 52px;
  margin-bottom: -26px;
  border-radius: 50%;

  transition: 200ms ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

export const CartIcon = styled.img`
  width: 24px;
  height: 24px;
`;
