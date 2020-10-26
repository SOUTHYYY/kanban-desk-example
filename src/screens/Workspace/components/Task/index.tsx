import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { TaskType } from '../../types';
import { TaskItem } from './styles';

interface IProps {
  item: TaskType;
  index: number;
}

export const Task: React.FC<IProps> = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided: any, snapshot: any) => {
        return (
          <TaskItem
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              // backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
              ...provided.draggableProps.style,
            }}>
            {item.content}
          </TaskItem>
        );
      }}
    </Draggable>
  );
};
