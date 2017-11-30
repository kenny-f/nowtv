import React from 'react'
import {shallow} from 'enzyme'
import {Message} from './Message'

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