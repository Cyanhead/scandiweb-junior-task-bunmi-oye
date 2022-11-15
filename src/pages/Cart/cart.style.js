import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
`;

export const Heading = styled.h1`
  margin-bottom: 56px;

  font-weight: ${props => props.fontWeight || 700};
  text-transform: uppercase;
`;

export const RowGroup = styled.div`
  min-height: calc(100vh - 530px);
  margin-bottom: 24px;
`;

export const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 24px 0 32px 0;
  border-top: 1px solid #e5e5e5;

  &:last-child {
    border-bottom: 1px solid #e5e5e5;
  }
`;

export const ProductLeft = styled.div``;

export const Brand = styled.p`
  margin-bottom: 16px;

  font-size: 1.875em;
  font-weight: 600;
  line-height: 27px;
`;

export const Name = styled.p`
  font-size: 1.875em;
  font-weight: 400;
  line-height: 27px;
`;

export const Price = styled.div`
  margin: 20px 0;

  font-size: 1.5em;
  font-weight: 700;
`;

export const CartP = styled.p`
  font-size: 1.5em;
  font-weight: ${props => props.fontWeight || 400};

  text-transform: capitalize;
`;

export const Number = styled.p`
  margin-left: 4px;

  font-size: 1.5em;
  font-weight: 700;
`;

export const ProductRight = styled.div`
  display: flex;
`;

export const ImageWrap = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 288px;

  object-fit: contain;
`;

export const Arrows = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;

  display: flex;
  justify-content: flex-end;
`;

export const ArrowWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.73);

  margin-right: 8px;
  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 150ms ease-in-out;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;

export const ArrowLeft = styled.img`
  width: 5.62px;
  height: 11.24px;
`;

export const ArrowRight = styled.img`
  transform: rotate(180deg);
  width: 5.62px;
  height: 11.24px;
`;

export const TotalSection = styled.div`
  line-height: 28px;

  max-width: 280px;
  width: 100%;
`;

export const Tax = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  margin-bottom: 8px;
`;

export const Quantity = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  margin-bottom: 8px;
`;

export const TotalPrice = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  margin-bottom: 16px;
`;
