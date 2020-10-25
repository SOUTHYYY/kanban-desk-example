import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnType, TaskType } from '../../types';
import { HeaderContainer, ColumnContainer, ColumnWrapper } from './styles';
import { Task } from '../Task/Task';

interface Iprops {
  item: ColumnType;
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
              <ColumnContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={
                  {
                    // background: snapshot.isDraggingOver ? 'lightgrey' : '#fff',
                  }
                }>
                {items.map((item: TaskType, index: number) => {
                  return <Task key={item.id} item={item} index={index} />;
                })}
                {provided.placeholder}
              </ColumnContainer>
            );
          }}
        </Droppable>
      </div>
    </ColumnWrapper>
  );
};
