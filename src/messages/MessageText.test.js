import React from 'react'
import {shallow} from 'enzyme'
import MessageText from './MessageText'

describe('Message', () => {
  it('renders the message passed in as prop', () => {
    const message = shallow(
      <MessageText message="hello world" />
    )

    expect(message.find('span').text()).toEqual('hello world')
  })
})