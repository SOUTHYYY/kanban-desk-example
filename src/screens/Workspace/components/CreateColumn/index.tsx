import React from 'react';

// Styles
import { Wrapper, Button, Form } from './styles';

// Types
import { ColumnType } from '../../types';

// Components
import TextField from '@material-ui/core/TextField/TextField';
import AddIcon from '@material-ui/icons/Add';
import { Notification } from '../../../../helpers/Notification';

interface IProps {
  handleSetColumns: (columns: ColumnType[]) => void;
  columns: ColumnType[];
}

export const CreateColumn: React.FC<IProps> = ({ handleSetColumns, columns }: IProps) => {
  const [name, setName] = React.useState<string>('');
  const [open, setOpen] = React.useState<boolean>(false);
  const [notificationText, setNotificationText] = React.useState<string>('');

  const handleSetColumnName = (e: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setName(e.target.value);

  const handleCreateColumn = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!name.length) {
      setOpen(true);
      setNotificationText('Please enter name of column!');
      return;
    }
    handleSetColumns([...columns, { id: new Date().toDateString(), name, items: [] }]);
    setName('');
    setNotificationText('Success!');
    setOpen(true);
  };

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleCreateColumn}>
          <TextField
            id="outlined-basic"
            label="Column Name"
            variant="outlined"
            onChange={handleSetColumnName}
            value={name}
          />

          <Button onClick={handleCreateColumn}>
            <AddIcon />
            Create new column
          </Button>
        </Form>
      </Wrapper>
      <Notification isOpen={open} setClose={setOpen} text={notificationText} />
    </>
  );
};
