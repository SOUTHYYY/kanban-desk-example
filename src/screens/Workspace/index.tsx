import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { CreateCardText, ColumnContainer, Container } from './styles';

import { TaskType, ColumnType } from './types';

import { Column } from './components/Column';

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

const Workspace: React.FC = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result: any, columns: ColumnType[]) => {
    if (!result.destination) return;
    const { source, destination } = result;
    // Sourse - откуда пришла
    // Destanation - куда перетащили

    if (source.droppableId !== destination.droppableId) {
      const sourceIdx = columns.findIndex((column: ColumnType) => column.id === source.droppableId);
      const sourceColumn = columns[sourceIdx];

      const destIdx = columns.findIndex(
        (column: ColumnType) => column.id === destination.droppableId,
      );
      const destColumn = columns[destIdx];

      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      const newArray = [...columns];
      newArray[sourceIdx].items = sourceItems;
      newArray[destIdx].items = destItems;

      setColumns(newArray);
    } else {
      // TODO: Change this things
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns)}>
        {columns.map((item: ColumnType, index: number) => {
          return <Column key={item.id} item={item} />;
        })}
      </DragDropContext>
      <div>
        <input type="text" placeholder="Column name" />
        <button
          onClick={() =>
            setColumns([...columns, { id: new Date().toDateString(), name: 'TEST', items: [] }])
          }>
          Create new column
        </button>
      </div>
    </Container>
  );
};

export default Workspace;
