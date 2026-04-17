export type StatusType = 'Done' | 'Working on it' | 'Stuck' | 'Waiting' | 'Sync with other team' | '';
export type PriorityType = 'High' | 'Medium' | 'Low' | 'Critical' | '';

export interface Item {
  id: string;
  name: string;
  person?: string;
  status: StatusType;
  date: string;
  priority: PriorityType;
}

export interface Group {
  id: string;
  title: string;
  color: string;
  items: Item[];
}

export type ColumnId = 'task' | 'owner' | 'status' | 'priority' | 'eta';

export interface ColumnWidths {
  task: number;
  owner: number;
  status: number;
  priority: number;
  eta: number;
}
