import React from 'react';
import { Container, TextArea, Button } from './styles';

import AddIcon from '@material-ui/icons/Add';

export const CreateTask = () => {
  return (
    <Container>
      <TextArea placeholder="Enter name for this task" />
      <Button>
        <AddIcon />
        Create new task
      </Button>
    </Container>
  );
};
