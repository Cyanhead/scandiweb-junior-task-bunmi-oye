import styled from 'styled-components';
const primary = props => props.theme.color.primary;

export const Container = styled.div`
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
