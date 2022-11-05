import styled from 'styled-components';
const primary = props => props.theme.color.primary;

export const Container = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;

  background-color: ${props => props.theme.color.white};
`;

export const Wrap = styled.div`
  position: relative;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Left = styled.nav`
  display: flex;
  align-items: stretch;
`;

export const TabWrap = styled.div`
  padding: 28px 16px 30px 16px;
  border-bottom: 2px solid transparent;

  cursor: pointer;

  &:hover {
    color: ${primary};

    border-bottom: 2px solid ${primary};
  }
  border-bottom: 2px solid ${({ active }) => (active ? primary : 'transparent')};
`;

export const TabText = styled.p`
  color: ${({ active }) => (active ? primary : 'inherit')};

  text-transform: uppercase;
  font-size: 1em;
  font-weight: ${({ active }) => (active ? 600 : 400)};
  line-height: 20px;
`;

export const Middle = styled.div``;

export const Logo = styled.img`
  padding: 8px;
  border-radius: 50%;

  transition: 150ms ease-in-out;

  &:hover {
    background-color: ${props => props.theme.color.hoverGrey};
  }
`;

export const Right = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  padding: 0 20px;
`;

export const CurrencyWrap = styled.div`
  display: flex;
  align-items: baseline;

  margin-right: 22px;
`;

export const CurrencySymbol = styled.p`
  margin: 0 10px;
  font-size: 1.125em;
  font-weight: 500;
`;

export const CurrencyArrow = styled.img``;

export const CurrencySelect = styled.select``;

export const CurrencyOption = styled.option``;

export const CartContainer = styled.div`
  padding: 16px 8px;

  cursor: pointer;
`;

export const CartWrap = styled.div`
  position: relative;
`;

export const CartIcon = styled.img``;

export const CartBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -8px;
  right: -13px;

  width: 20px;
  height: 20px;
  padding: 3px;

  background-color: ${props => props.theme.color.black};

  border-radius: 50%;
`;

export const CartCounter = styled.p`
  color: #fff;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
`;

export const GreyBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;

  background-color: rgba(57, 55, 72, 0.22);

  transition: 200ms ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'initial' : 'none')};
`;
