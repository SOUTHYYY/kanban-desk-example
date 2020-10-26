import TextField from '@material-ui/core/TextField/TextField';
import React from 'react';
import { ColumnType } from '../../types';

import { Wrapper, Button } from './styles';

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
  debugger;

  const handleSetColumnName = (e: any): void => setName(e.target.value);

  const handleCreateColumn = (): void => {
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
  debugger;

  return (
    <>
      <Wrapper>
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
      </Wrapper>
      <Notification isOpen={open} setClose={setOpen} text={notificationText} />
    </>
  );
};
