import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

// Styles
import { Container, ScrollWrapper } from './styles';

// Types
import { ColumnType } from './types';

// Components
import { Column } from './components/Column';
import { CreateColumn } from './components/CreateColumn';

interface IProps {
  columnsFromBackend: ColumnType[];
}

const Workspace: React.FC<IProps> = ({ columnsFromBackend }: IProps) => {
  const [columns, setColumns] = useState(columnsFromBackend);
  const handleSetColumns = (columns: ColumnType[]) => setColumns(columns);

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
      const sourceIdx = columns.findIndex((column: ColumnType) => column.id === source.droppableId);
      const sourceColumn = columns[sourceIdx];
      const sourceItems = [...sourceColumn.items];

      const [removed] = sourceItems.splice(source.index, 1);
      sourceItems.splice(destination.index, 0, removed);

      const newArray = [...columns];
      newArray[sourceIdx].items = sourceItems;
      setColumns(newArray);
    }
  };

  return (
    <Container>
      <ScrollWrapper>
        <DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns)}>
          {columns.map((item: ColumnType, index: number) => {
            return <Column key={item.id} item={item} columns={columns} setColumns={setColumns} />;
          })}
        </DragDropContext>
        <CreateColumn columns={columns} handleSetColumns={handleSetColumns} />
      </ScrollWrapper>
    </Container>
  );
};

export default Workspace;
