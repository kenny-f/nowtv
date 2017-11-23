import React from 'react'
import {shallow} from 'enzyme'
import Email from './Email'

describe('Email', () => {
  it('renders the email from props', () => {
    const email = shallow(
      <Email email="iron.man@marvel.com" />
    )

    expect(email.text())
      .toEqual('Email: iron.man@marvel.com')
  })
})