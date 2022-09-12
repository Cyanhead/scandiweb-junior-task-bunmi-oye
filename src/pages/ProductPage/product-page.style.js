import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Left = styled.div`
  flex: 2;

  display: flex;
  align-items: flex-start;
`;

export const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 80px;
  margin-right: 40px;
`;

export const ImageWrap = styled.div`
  width: 100%;
  margin-bottom: 40px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  transition: 150ms ease-in-out;

  &:last-child {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: auto;
`;

export const ImagePreviewWrap = styled.div`
  display: flex;

  width: 100%;
  max-width: 610px;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: auto;
`;

export const Right = styled.div`
  flex: 1;

  max-width: 292px;
  margin-left: 100px;
`;

export const Title = styled.div`
  margin-bottom: 42px;
`;

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
  margin-top: 36px;
  margin-bottom: 20px;
`;

export const PriceText = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.125em;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 18px;
`;

export const PriceValue = styled.p`
  font-size: 1.5em;
  font-weight: 700;
`;

export const Description = styled.p`
  margin-top: 40px;

  font-family: 'Roboto', sans-serif;
`;
