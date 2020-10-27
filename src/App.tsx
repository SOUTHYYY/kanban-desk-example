import React from 'react';
import { GlobalStyles } from './GlobalStyles';

// Types
import { ColumnType, TaskType } from './screens/Workspace/types';

// Components
import Workspace from './screens/Workspace';

const itemsFromBackend: TaskType[] = [
  {
    id: '1',
    content: 'Пофиксить обнову',
    date: new Date(),
    comment: '',
    markers: [
      { title: 'Backend', color: '#BD3FFC' },
      { title: 'Frontend', color: '#FFC607' },
      { title: 'СРОЧНО!', color: '#EE2626' },
      { title: 'Требует доработки', color: '#3F65FC' },
    ],
  },
  {
    id: '12',
    content: 'Обновить сервак',
    date: new Date(),
    comment: '',
    markers: [{ title: 'Backend', color: '#BD3FFC' }],
  },
  {
    id: '123',
    content: 'Добавить валидацию',
    date: new Date(),
    comment: '',
    markers: [{ title: 'Frontend', color: '#FFC607' }],
  },
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
