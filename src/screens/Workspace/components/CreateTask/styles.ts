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

type ButtonProps = {
  visible: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px;
  background-color: ${(props: ButtonProps) => (props.visible ? '#32a232' : 'inherit')};
  border: none;
  color: ${(props: ButtonProps) => (props.visible ? '#fff' : '#000')};
  border-radius: 7px;
  cursor: pointer;

  &:focus,
  active {
    outline: none !important;
    border: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }

  &:hover {
    background-color: ${(props: ButtonProps) =>
      props.visible ? '#3bb03b' : 'rgb(192,192,192, 0.2)'};
  }
`;
