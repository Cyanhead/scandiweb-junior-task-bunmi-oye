import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  z-index: 3;

  background-color: ${props => props.theme.color.white};

  transition: 200ms ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'initial' : 'none')};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px 16px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 32px;

  font-weight: 700;
`;

export const RowGroup = styled.div``;

export const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 18px 0 24px 0;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const ProductLeft = styled.div``;

export const MiniCartP = styled.p`
  margin: ${props => props.mar || ''};

  font-size: 1em;
  font-weight: ${props => props.weight || 400};
`;

export const ProductRight = styled.div`
  display: flex;
`;

export const ImageWrap = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 120px;
  height: 190px;

  object-fit: cover;
`;

export const TotalSection = styled.div``;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 44px 0 32px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
