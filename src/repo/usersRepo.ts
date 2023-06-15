import { User } from "../models/user";

const users: User[] = [
  {
    id: 1,
    name: 'Renato',
  },
  {
    id: 2,
    name: 'Feder',
  },
  {
    id: 3,
    name: 'Tomaz',
  },
  {
    id: 4,
    name: 'Marian',
  }
]

const getUsers = (): User[] => users;

const getUser = (id?: number): User | null => {
  const user = users.find((user) => user.id === id) || null
  return user;
};

const createUser = (payload: User): User | string => {
  const user = users.find(() => payload.id) || null;
  if (user) return 'User Exists'
  users.push(payload);
  return payload;
};

export const UsersRepo = {
  getUsers,
  getUser,
  createUser
}

