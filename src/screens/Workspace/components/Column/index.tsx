import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

// Styles
import { HeaderContainer, ColumnContainer, ColumnWrapper } from './styles';

// Types
import { ColumnType, TaskType } from '../../types';

// Components
import { Task } from '../Task';
import { CreateTask } from '../CreateTask';

interface Iprops {
  item: ColumnType;
  columns: ColumnType[];
  setColumns: (columns: ColumnType[]) => void;
}

export const Column: React.FC<Iprops> = (props: Iprops) => {
  const { name, id: columnId, items } = props.item;
  return (
    <ColumnWrapper>
      <HeaderContainer>
        <h3>{name}</h3>
      </HeaderContainer>
      <div style={{ margin: 8 }}>
        <Droppable droppableId={columnId} key={columnId}>
          {(provided: any, snapshot: any) => {
            return (
              <ColumnContainer {...provided.droppableProps} ref={provided.innerRef}>
                {items.map((item: TaskType, index: number) => {
                  return <Task key={item.id} item={item} index={index} />;
                })}
                {provided.placeholder}
              </ColumnContainer>
            );
          }}
        </Droppable>
      </div>
      <CreateTask setColumns={props.setColumns} columns={props.columns} columnID={columnId} />
    </ColumnWrapper>
  );
};
