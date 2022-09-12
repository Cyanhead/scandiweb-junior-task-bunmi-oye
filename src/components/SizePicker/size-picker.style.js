import styled from 'styled-components';

export const Wrap = styled.div`
  margin: 24px 0;
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

export const Box = styled.div`
  border: 1px solid ${props => props.theme.color.black};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ selected }) => (selected ? 'black' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};

  width: ${props => props.boxWidth || '64px'};
  height: ${props => props.boxHeight || '44px'};
  margin-right: ${props => props.gap || ''};

  &:last-child {
    margin-right: 0;
  }

  cursor: pointer;
  transition: 150ms ease-in-out;
`;

export const Value = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${props => props.boxFontSize || '1em'};
  font-weight: 400;
  text-transform: uppercase;
  line-height: 18px;
`;
