import React from 'react';

// Types
import { CreateTaskTextType } from '../screens/Workspace/components/CreateTask';
import { CreateColumnTextType } from '../screens/Workspace/components/CreateColumn';

// Components
import Snackbar from '@material-ui/core/Snackbar/Snackbar';
import Alert from '@material-ui/lab/Alert/Alert';

interface IProps<T> {
  isOpen: boolean;
  setClose: (state: boolean) => void;
  text: T | '';
}

export const Notification: React.FC<IProps<CreateTaskTextType | CreateColumnTextType>> = (
  props,
) => {
  const handleClose = () => {
    setTimeout(() => props.setClose(false), 2000);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={props.isOpen}
      autoHideDuration={2000}
      onClose={handleClose}>
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={props.text === 'Success!' ? 'success' : 'error'}>
        {props.text}
      </Alert>
    </Snackbar>
  );
};
