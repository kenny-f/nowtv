import React from 'react'
import {shallow} from 'enzyme'
import MessageList from './MessageList'

describe('MessageList', () => {
  it('renders a ul', () => {
    const messageList = shallow(
      <MessageList list={[]}/>
    )

    expect(messageList.find('ul').length).toBe(1)
  })
  
  it('renders a MessageRow for every item in the list', () => {
    const list = [
      {
        id: 'one',
        message: 'hello',
        avatarUrl: 'hello.png'
      },
      {
        id: 'two',
        message: 'world',
        avatarUrl: 'world.png'
      },
    ]

    const messageList = shallow(
      <MessageList list={list}/>
    )

    expect(messageList.find('MessageRow').length).toBe(2)
  })
  
  it('passes the correct props to the MessageRow', () => {
    const list = [
      {
        id: 'one',
        message: 'hello',
        avatarUrl: 'hello.png'
      }
    ]

    const messageList = shallow(
      <MessageList list={list}/>
    )

    expect(messageList.find('MessageRow').props()).toEqual({message: 'hello', avatarUrl: 'hello.png'})
  })
})