export type ActiveFilter = 'All' | 'Done' | 'Undone';

export interface Todo {
  id: number;
  description: string;
  done: boolean;
};

