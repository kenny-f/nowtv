import React from 'react'
import {shallow} from 'enzyme'
import MessageRow from './MessageRow'

describe('MessageRow', () => {
  it('renders an Avatar', () => {
    const messageRow = shallow(
      <MessageRow avatarUrl="gravatar" />
    )

    expect(messageRow.find('Avatar').props().src)
      .toBe('gravatar')
  })
  
  it('renders a MessageWithHover', () => {
    const messageRow = shallow(
      <MessageRow
        message="hi"
        email="a@b.com"
        timestamp="now"
      />
    )
    console.log(messageRow.debug())
    expect(messageRow.find('MessageWithHover').props())
      .toEqual({
        message: 'hi',
        email: 'a@b.com',
        timestamp: 'now',
      })
  })
})