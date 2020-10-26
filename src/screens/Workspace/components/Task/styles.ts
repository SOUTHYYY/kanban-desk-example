import styled from 'styled-components';

export type MarkerType = {
  color: string;
};

export const TaskItem = styled.div`
  user-select: none;
  padding: 16px;
  margin: 0 0 8px 0;
  min-height: 50px;
  border-radius: 5px;
  background-color: #fff;
`;

export const MarkerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Marker = styled.span<MarkerType>`
  padding: 2px;
  margin-right: 3px;
  margin-bottom: 3px;
  font-size: 10px;
  border-radius: 4px;
  color: ${(props: MarkerType) => props.color};
  border: 1.5px solid ${(props: MarkerType) => props.color};
`;

export const CreateTaskText = styled.div`
  padding: 4px;
  width: 250px;
  border-radius: 7px;
`;
