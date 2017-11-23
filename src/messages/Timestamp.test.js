import React from 'react'
import {shallow} from 'enzyme'
import Timestamp from './Timestamp'

describe('Timestamp', () => {
  it('renders the timestamp', () => {
    const timestamp = shallow(
      <Timestamp timestamp={'2017-04-04'} />
    )

    expect(timestamp.text()).toEqual('Timestamp: 2017-04-04');
  })
})