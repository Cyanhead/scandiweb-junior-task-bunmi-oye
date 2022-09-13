import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.color.white};

  margin: ${props => props.mar || '0 24px 0 0'};
`;

export const IconWrap = styled.div`
  cursor: pointer;
  transition: 150ms ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Icon = styled.img`
  width: ${props => props.mar || '45px'};
  height: ${props => props.mar || '45px'};
  height: 45px;
`;

export const Text = styled.p`
  font-size: ${props => props.mar || '1.5em'};
  font-weight: 500;
`;
