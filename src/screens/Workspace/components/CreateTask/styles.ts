import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px;
`;

export const TextArea = styled.textarea`
  border-radius: 7px;
  width: 100%;
  padding: 5px;
  resize: vertical;
  max-height: 150px;
  min-height: 70px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  background-color: #32a232;
  border: none;
  color: #fff;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #3bb03b;
    transition: 0.3s ease;
  }
`;
