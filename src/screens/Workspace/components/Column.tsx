import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnContainer, Column as ColumnWrapper } from '../styles';
import { ColumnType, TaskType } from '../types';
import { CartItem } from './CartItem';

interface Iprops {
  item: ColumnType;
}

export const Column: React.FC<Iprops> = (props: Iprops) => {
  const { name, id: columnId, items } = props.item;
  return (
    <ColumnWrapper>
      <h2>{name}</h2>
      <div style={{ margin: 8 }}>
        <Droppable droppableId={columnId} key={columnId}>
          {(provided: any, snapshot: any) => {
            return (
              <ColumnContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                }}>
                {items.map((item: TaskType, index: number) => {
                  return <CartItem key={item.id} item={item} index={index} />;
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
