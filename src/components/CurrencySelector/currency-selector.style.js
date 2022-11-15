import styled from 'styled-components';

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
