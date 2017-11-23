import moment from 'moment'
import sortBy from 'lodash.sortby'
import { selectAvatarUrl, selectEmail } from '../users/selectors';
import formatTimestamp from './formatTimestamp'

export const selectMessages = state => state.messages;

export const selectMessagesAsArray = state => {
  const messages = selectMessages(state);
  
  return Object
    .keys(messages)
    .map((key)=> messages[key]);
}

export const selectMessagesOrderedByTimestamp = state => {
  const messagesAsArray = selectMessagesAsArray(state);
  
  return sortBy(messagesAsArray, (message) => {
    return new moment(message.timestamp)
  }).reverse()
}

export const selectMessageList = state => {
  const messages = selectMessagesOrderedByTimestamp(state);

  return messages.map(msg => ({
      ...msg,
      timestamp: formatTimestamp(msg.timestamp),
      avatarUrl: selectAvatarUrl(msg.userId, state),
      email: selectEmail(msg.userId, state),
    }
  ));
}
