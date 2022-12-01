import styled from 'styled-components';

export const ImageWrap = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 288px;

  object-fit: contain;
`;

export const Arrows = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;

  display: flex;
  justify-content: flex-end;
`;

export const ArrowWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.73);

  margin-right: 8px;
  width: 24px;
  height: 24px;

  border: none;
  outline: none;

  cursor: pointer;
  transition: 150ms ease-in-out;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;

export const ArrowLeft = styled.img`
  width: 5.62px;
  height: 11.24px;
`;

export const ArrowRight = styled.img`
  transform: rotate(180deg);
  width: 5.62px;
  height: 11.24px;
`;
