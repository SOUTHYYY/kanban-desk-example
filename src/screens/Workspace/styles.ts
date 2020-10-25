import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  padding: 10px;
`;

export const ScrollWrapper = styled.div`
  overflow-x: auto;
  min-height: calc(100vh - 20px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
