import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
`;

export const Heading = styled.div`
  margin: 0 0 80px 0;

  font-weight: 400;
  font-size: 1.75em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  row-gap: 60px;
  column-gap: 20px;
`;
