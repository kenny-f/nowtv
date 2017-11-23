import { getMembers } from '../data';

export const getUsers = () => {
  return {
    type: 'USERS',
    payload: getMembers()
  };
}