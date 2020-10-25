import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { CartItem as CartItemContainer } from '../styles';

import { TaskType } from '../types';

interface IProps {
  item: TaskType;
  index: number;
}

export const CartItem: React.FC<IProps> = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided: any, snapshot: any) => {
        return (
          <CartItemContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
              ...provided.draggableProps.style,
            }}>
            {item.content}
          </CartItemContainer>
        );
      }}
    </Draggable>
  );
};
