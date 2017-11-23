import React from 'react'
import MessageWithHover from './Message'
import Avatar from '../users/Avatar'

const MessageRow = ({message, avatarUrl, email, timestamp}) => 
  <li>
    <div className="message-row-container">
      <div className="avatar-container"><Avatar src={avatarUrl}/></div>
      <div><MessageWithHover message={message} email={email} timestamp={timestamp}/></div>
    </div>
  </li>

export default MessageRow;