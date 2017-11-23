import React from 'react'
import {shallow} from 'enzyme'
import Avatar from './Avatar'

describe('Avatar', () => {
  it('renders an img tag', () => {
    const avatar = shallow(
      <Avatar src="gravatar"/>
    )

    expect(avatar.find('img').props())
      .toEqual({
        width: '50',
        alt: 'Avatar',
        src: 'gravatar',
      })
  })
})