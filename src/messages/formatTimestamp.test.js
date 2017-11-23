import formatTimestamp from './formatTimestamp'

describe('formatTimestamp', () => {
  it('formats timestamp to human readable form', () => {
    expect(formatTimestamp('2016-11-09T05:04:58Z'))
      .toEqual('2016 Nov 09 - 05:04')
  })
})