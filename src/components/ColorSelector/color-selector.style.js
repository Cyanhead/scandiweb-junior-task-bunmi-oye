import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const fadeGrey = props => props.theme.color.fadeGrey;

export const Wrap = styled.div`
  margin: ${props => props.mar || '24px 0'};
`;

export const Text = styled.p`
  margin-bottom: 8px;

  font-family: ${({ inheritFont }) =>
    inheritFont ? 'inherit' : "'Roboto Condensed', sans-serif"};
  font-size: ${props => props.fontSize || '1.125em'};
  font-weight: ${props => props.fontWeight || 700};
  text-transform: ${props => props.fontCase || 'uppercase'};
  line-height: 18px;
`;

export const Picker = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ noSpan }) => (noSpan ? 'flex-start' : 'space-between')};
`;

export const Border = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) => (selected ? 'white' : fadeGrey)};

  padding: 1px;
  border: ${props => props.borderSize || '2px'} solid
    ${({ selected }) => (selected ? primary : 'white')};

  cursor: pointer;
  transition: 150ms ease-in-out;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.bg || 'black'};

  width: ${props => props.boxWidth || '32px'};
  height: ${props => props.boxHeight || '32px'};
  margin-right: ${props => props.gap || ''};

  &:last-child {
    margin-right: 0;
  }
`;
