export type MarkerType = {
  title: string;
  color: string;
};

export type TaskType = {
  id: string;
  content: string;
  markers: MarkerType[];
};

export type ColumnType = {
  id: string;
  name: string;
  items: TaskType[];
};
