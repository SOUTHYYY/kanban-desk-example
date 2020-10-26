import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

// Styles
import { Marker, TaskItem, MarkerContainer } from './styles';

// Types
import { TaskType } from '../../types';

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
              ...provided.draggableProps.style,
            }}>
            {item.content}
            {item.markers.length ? (
              <MarkerContainer>
                {item.markers.map((el) => (
                  <Marker color={el.color}>{el.title}</Marker>
                ))}
              </MarkerContainer>
            ) : null}
          </TaskItem>
        );
      }}
    </Draggable>
  );
};
