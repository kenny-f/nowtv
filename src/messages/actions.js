import { getMessages } from '../data';

export const getChatLog = () => {
  return {
    type: 'MESSAGES',
    payload: getMessages()
  };
}