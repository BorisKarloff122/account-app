export interface User extends Array<string | number>{
  id: number;
  email: string;
  password: string;
  name: string;
  agree?: boolean;
}
