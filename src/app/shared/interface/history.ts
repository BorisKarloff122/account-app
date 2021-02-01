export interface IHistory extends Array<object> {
  id?: number;
  type: string;
  amount: number;
  category: number;
  date: string;
  description: string;
}

