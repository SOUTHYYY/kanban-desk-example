import React from 'react';

// Styles
import { Container, TextArea, Button } from './styles';

// Types
import { ColumnType } from '../../types';

// Compnents
import AddIcon from '@material-ui/icons/Add';

interface IProps {
  columns: ColumnType[];
  columnID: string;
  setColumns: (columns: ColumnType[]) => void;
}

export const CreateTask: React.FC<IProps> = (props: IProps) => {
  const [name, setName] = React.useState<string>('');
  const [visible, setVisible] = React.useState(false);

  const handleSetName = (e: any) => setName(e.target.value);

  const handleSetVisible = () => setVisible(true);
  const handleSetUnVisible = () => setVisible(false);

  const handleCreateTask = () => {
    const idx = props.columns.findIndex((el) => el.id === props.columnID);
    let newArray = [...props.columns];

    const items = newArray[idx].items;

    newArray[idx].items = [...items, { id: new Date().toString(), content: name }];

    props.setColumns(newArray);

    setName('');
    handleSetUnVisible();
  };

  return (
    <Container>
      {visible && (
        <>
          <TextArea
            autoFocus
            onChange={handleSetName}
            value={name}
            placeholder="Enter name for this task"
          />
          <Button onClick={handleCreateTask}>
            <AddIcon />
            Add Task
          </Button>
        </>
      )}
      {!visible && (
        <Button onClick={handleSetVisible}>
          <AddIcon />
          Create new task
        </Button>
      )}
    </Container>
  );
};
