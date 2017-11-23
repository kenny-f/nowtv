import React from 'react'
import {shallow} from 'enzyme'
import {Message} from './Message'
// export const Message = ({message, email, hovered, timestamp}) => (
//   <div>
//     <MessageText message={message}/>
//     <Timestamp timestamp={timestamp} />
//     { hovered &&<Email email={email} /> }
//   </div>
// )

// const MessageWithHover = withShowOnHover(Message)

// MessageWithHover.displayName = 'MessageWithHover'

// export default MessageWithHover

describe('Message', () => {
  it('renders MessageText component with message prop', () => {
    const message = shallow(
      <Message message="hello" />
    )
    
    expect(message.find('MessageText').props().message)
      .toEqual('hello')
  })
  
  it('renders Timestamp component with timestamp prop', () => {
    const message = shallow(
      <Message timestamp="time" />
    )

    expect(message.find('Timestamp').props().timestamp)
      .toEqual('time')
  })
  
  it('renders Email component with email prop when hovered is true', () => {
    const message = shallow(
      <Message email="email" hovered />
    )

    expect(message.find('Email').props().email)
      .toEqual('email')
  })
  
  it('does not render Email component when hovered is false', () => {
    const message = shallow(
      <Message email="email" hovered={false} />
    )

    expect(message.find('Email').length)
      .toBe(0)
  })
})