import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 16px 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  transition: 200ms ease-in-out;

  &:hover {
    border: 1px solid rgba(200, 0, 0, 1);
  }
`;

export const Heading = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: 1.5em;
`;

export const ReloadIcon = styled.img`
  width: auto;
  height: 32px;

  cursor: pointer;

  transition: 150ms ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;
