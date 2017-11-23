import React from 'react'
import MessageText from './MessageText'
import Email from '../users/Email'
import withShowOnHover from '../withShowOnHover';
import Timestamp from './Timestamp';

export const Message = ({message, email, hovered, timestamp}) => (
  <div>
    <MessageText message={message}/>
    <Timestamp timestamp={timestamp} />
    { hovered && <Email email={email} /> }
  </div>
)

const MessageWithHover = withShowOnHover(Message)

MessageWithHover.displayName = 'MessageWithHover'

export default MessageWithHover