import styled from 'styled-components';
import { Link } from 'react-router-dom';

const fadeGrey = props => props.theme.color.fadeGrey;

export const Container = styled.div`
  pointer-events: ${({ available }) => (available ? 'initial' : 'none')};
  cursor: pointer;
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Wrap = styled.div`
  padding: 15px;

  transition: 150ms ease-in-out;
  &:hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const Top = styled.div`
  position: relative;
`;

export const ImageWrap = styled.div`
  position: relative;

  max-width: 356px;
  width: 100%;
  height: 338px;

  opacity: ${({ available }) => (available ? 1 : 0.5)};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const OutOfStock = styled.p`
  position: absolute;
  top: 50%;
  margin-top: -18px;
  right: 0;
  left: 0;

  display: ${({ show }) => (show ? 'none' : 'block')};

  color: ${fadeGrey};

  font-size: 1.5em;
  font-weight: 400;

  text-transform: uppercase;
  text-align: center;
`;

export const Bottom = styled.div`
  margin-top: 24px;

  color: ${({ available }) => (available ? 'inherit' : fadeGrey)};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.125em;
  font-weight: 300;
`;

export const ProductBrand = styled.p`
  margin-right: 4px;
`;

export const ProductName = styled.p``;

export const Price = styled.p`
  font-size: 1.125em;
  font-weight: 500;
`;
