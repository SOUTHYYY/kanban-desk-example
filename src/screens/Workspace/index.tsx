import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { Container } from './styles';

import { TaskType, ColumnType } from './types';

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
        {columns.map(({ name, id: columnId, items }, index: number) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              key={columnId}>
              <h2>{name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided: any, snapshot: any) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}>
                        {items.map((item: any, index: number) => {
                          return (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided: any, snapshot: any) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: 'none',
                                      padding: 16,
                                      margin: '0 0 8px 0',
                                      minHeight: '50px',
                                      backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                      color: 'white',
                                      ...provided.draggableProps.style,
                                    }}>
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </Container>
  );
};

export default Workspace;
