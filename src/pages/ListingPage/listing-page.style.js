import styled from 'styled-components';

export const Container = styled.header`
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
  margin: 0 0 80px 0;

  font-weight: 400;
  font-size: 1.75em;
  text-transform: capitalize;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  row-gap: 60px;
  column-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
