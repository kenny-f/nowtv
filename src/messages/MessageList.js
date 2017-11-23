import React from 'react'
import MessageRow from './MessageRow'

const MessageList = ({list}) => {
  return (
    <ul>
      {list.map(item => 
        <MessageRow
          key={item.id}
          message={item.message}
          timestamp={item.timestamp}
          avatarUrl={item.avatarUrl}
          email={item.email}
        />)}
    </ul>
  )
}

export default MessageList;