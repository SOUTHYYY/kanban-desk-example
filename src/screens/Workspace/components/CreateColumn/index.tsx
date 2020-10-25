import React from 'react';
import { ColumnType } from '../../types';

import { Wrapper } from './styles';

interface IProps {
  handleSetColumns: (columns: ColumnType[]) => void;
  columns: ColumnType[];
}

export const CreateColumn: React.FC<IProps> = ({ handleSetColumns, columns }: IProps) => {
  return (
    <Wrapper>
      <input type="text" placeholder="Column name" />
      <button
        onClick={() =>
          handleSetColumns([...columns, { id: new Date().toDateString(), name: 'TEST', items: [] }])
        }>
        Create new column
      </button>
    </Wrapper>
  );
};
