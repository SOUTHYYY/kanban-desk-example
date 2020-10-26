import Snackbar from '@material-ui/core/Snackbar/Snackbar';

import Alert from '@material-ui/lab/Alert/Alert';
import React from 'react';

interface IProps {
  isOpen: boolean;
  setClose: (state: boolean) => void;
  text: string;
}

export const Notification: React.FC<IProps> = (props: IProps) => {
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
        severity={props.text === 'Success' ? 'success' : 'error'}>
        {props.text}
      </Alert>
    </Snackbar>
  );
};
