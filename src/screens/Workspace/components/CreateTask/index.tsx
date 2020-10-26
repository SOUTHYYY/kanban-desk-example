import React from 'react';

// Styles
import { Container, TextArea, Button } from './styles';

// Types
import { ColumnType } from '../../types';

// Compnents
import AddIcon from '@material-ui/icons/Add';
import { Notification } from '../../../../helpers/Notification';

interface IProps {
  columns: ColumnType[];
  columnID: string;
  setColumns: (columns: ColumnType[]) => void;
}

export const CreateTask: React.FC<IProps> = (props: IProps) => {
  const [name, setName] = React.useState<string>('');
  const [visible, setVisible] = React.useState(false);

  const [open, setOpen] = React.useState<boolean>(false);
  const [notificationText, setNotificationText] = React.useState<string>('');

  const handleSetName = (e: any) => setName(e.target.value);

  const handleSetVisible = () => setVisible(true);
  const handleSetUnVisible = () => setVisible(false);

  const handleCreateTask = () => {
    if (!name.length) {
      setOpen(true);
      setNotificationText('Please enter the task name!');
      return;
    }
    const idx = props.columns.findIndex((el) => el.id === props.columnID);
    let newArray = [...props.columns];

    const items = newArray[idx].items;

    newArray[idx].items = [...items, { id: new Date().toString(), content: name, markers: [] }];

    props.setColumns(newArray);

    setName('');
    handleSetUnVisible();
  };

  return (
    <>
      <Container>
        {visible && (
          <TextArea
            autoFocus
            onChange={handleSetName}
            value={name}
            placeholder="Enter name for this task"
          />
        )}
        <Button visible={visible} onClick={visible ? handleCreateTask : handleSetVisible}>
          <AddIcon />
          {visible ? 'Add Task' : 'Create new Task'}
        </Button>
      </Container>
      <Notification isOpen={open} setClose={setOpen} text={notificationText} />
    </>
  );
};
