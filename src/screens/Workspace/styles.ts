import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justifycontent: 'center';
`;

export const ColumnContainer = styled.div`
  padding: 4px;
  width: 250px;
  min-height: 500px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartItem = styled.div`
  userselect: none;
  padding: 16px;
  margin: 0 0 8px 0;
  min-height: 50px;
  color: white';
`;

export const CreateCardText = styled.div`
  padding: 4px;
  width: 250px;
  border: 10px;
`;
