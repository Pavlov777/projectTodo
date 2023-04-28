export type User = {
  id: number | undefined;
  name: string;
  email: string;
  password: string;
};

export type UserId = User['id'];
