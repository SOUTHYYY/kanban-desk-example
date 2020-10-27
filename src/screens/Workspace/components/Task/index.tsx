import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

// Styles
import {
  Marker,
  TaskItem,
  TopInfo,
  TopInfoText,
  TopInfoButton,
  BottomInfo,
  MarkerContainer,
  DateInfo,
  DateText,
  DateContainer,
  DateInfoIcon,
} from './styles';

// Types
import { TaskType } from '../../types';

// Components
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface IProps {
  item: TaskType;
  index: number;
}

export const Task: React.FC<IProps> = ({ item, index }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

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
            <TopInfo>
              <TopInfoText>{item.content}</TopInfoText>
              <TopInfoButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                ...
              </TopInfoButton>

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Change task</MenuItem>
                <MenuItem onClick={handleClose}>Add marker</MenuItem>
                <MenuItem onClick={handleClose}>Remove</MenuItem>
              </Menu>
            </TopInfo>

            <BottomInfo>
              {item.markers && (
                <MarkerContainer>
                  {item.markers.map((el, id: number) => (
                    <Marker key={id} color={el.color}>
                      {el.title}
                    </Marker>
                  ))}
                </MarkerContainer>
              )}
              <DateContainer>
                <DateInfo>
                  <DateText>{item.date.toLocaleDateString()}</DateText>
                  <DateInfoIcon />
                </DateInfo>
              </DateContainer>
            </BottomInfo>
          </TaskItem>
        );
      }}
    </Draggable>
  );
};
