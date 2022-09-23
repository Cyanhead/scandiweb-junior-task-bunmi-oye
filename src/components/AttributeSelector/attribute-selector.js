import styled from 'styled-components';
const primary = props => props.theme.color.primary;

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
  background-color: ${({ selected }) =>
    selected ? 'white' : 'rgba(200,200,200,.4)'};

  padding: 1px;
  border: ${props => props.borderSize || '2px'} solid
    ${({ selected }) => (selected ? primary : 'white')};

  cursor: pointer;
  transition: 150ms ease-in-out;
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

export const ColorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.bg || 'black'};

  width: ${props => props.colorBoxWidth || '32px'};
  height: ${props => props.colorBoxHeight || '32px'};
  margin-right: ${props => props.gap || ''};

  &:last-child {
    margin-right: 0;
  }
`;

export const Value = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${props => props.boxFontSize || '1em'};
  font-weight: 400;
  text-transform: uppercase;
  line-height: 18px;
`;
