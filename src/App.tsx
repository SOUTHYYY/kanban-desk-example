import React from 'react';
import { GlobalStyles } from './GlobalStyles';

// Types
import { ColumnType, TaskType } from './screens/Workspace/types';

// Components
import Workspace from './screens/Workspace';

const itemsFromBackend: TaskType[] = [
  { id: '1', content: 'First task' },
  { id: '12', content: 'Second task' },
  { id: '123', content: 'Third task' },
  { id: '1234', content: 'Fourth task' },
  { id: '12345', content: 'Fifth task' },
];

const columnsFromBackend: ColumnType[] = [
  {
    id: '12312313ghfjghfhgfd',
    name: 'Requested',
    items: itemsFromBackend,
  },
  {
    id: '123123123',
    name: 'To do',
    items: [],
  },
  {
    id: '123123131231',
    name: 'In Progress',
    items: [],
  },
  {
    id: '12312313',
    name: 'Done',
    items: [],
  },
];

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Workspace columnsFromBackend={columnsFromBackend} />
    </>
  );
};
