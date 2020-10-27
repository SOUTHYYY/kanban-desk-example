import styled from 'styled-components';
import DateIcon from '@material-ui/icons/DateRange';

export type MarkerType = {
  color: string;
};

export const TaskItem = styled.div`
  user-select: none;
  padding: 10px;
  margin: 0 0 8px 0;
  min-height: 40px;
  border-radius: 5px;
  background-color: #fff;

  box-shadow: 0 4px 2px -2px lightgray;
`;

export const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const TopInfoText = styled.span``;

export const TopInfoButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  position: absolute;
  top: -5px;
  right: 0;
  border-radius: 4px;

  &:hover {
    background-color: rgb(192, 192, 192, 0.2);
  }
`;

export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MarkerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const Marker = styled.span<MarkerType>`
  padding: 2px;
  margin-right: 3px;
  margin-bottom: 3px;
  font-size: 10px;
  border-radius: 5px;
  background-color: ${(props: MarkerType) => props.color};
  color: #fff;
  border: 1.5px solid ${(props: MarkerType) => props.color};
`;

export const CreateTaskText = styled.div`
  padding: 4px;
  width: 250px;
  border-radius: 7px;
`;

export const DateContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const DateInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const DateText = styled.span`
  font-size: 12px;
  margin-right: 5px;
`;

export const DateInfoIcon = styled(DateIcon)`
  width: 14px !important;
`;
