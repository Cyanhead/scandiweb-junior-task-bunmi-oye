import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
`;

export const Wrap = styled.div`
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
  padding: 28px 16px 32px 16px;
  border-bottom: 2px solid transparent;

  cursor: pointer;

  &:hover {
    color: ${props => props.theme.color.primary}; // TODO delete

    border-bottom: 2px solid ${props => props.theme.color.primary};
  }
`;

export const TabText = styled.p`
  /* color: ${props =>
    props.theme.color.primary}; // TODO color is primary when active */

  text-transform: uppercase;
  font-size: 1em;
  font-weight: 400; // TODO 600 when active
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
