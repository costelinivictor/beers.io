import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  max-width: 300px;
  border-radius: 15px;
  padding: 40px;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.15);
  text-align: center;
  position: relative;
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 20px;
  top: 10px;
  color: #ccc;

  transition: 200ms;

  &:hover {
    color: #333;
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
  margin: 0 auto 20px;
`;
