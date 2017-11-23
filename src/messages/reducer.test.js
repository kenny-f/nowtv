import reducer from './reducer';

it('returns initial state', () => {
  expect(reducer(undefined, {})).toEqual({})
})

it('handles MESSAGES_FULFILLED', () => {
  const message = {
    id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
    userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    timestamp: '2017-02-09T04:27:38Z'
  }
  
  expect(
    reducer({}, { type: 'MESSAGES_FULFILLED', payload: [message]})
  ).toEqual(
    {
      [message.id]: message
    }
  )
})

it('handles MESSAGES_FULFILLED with two messages', () => {
  const message = {
    id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
    userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    timestamp: '2017-02-09T04:27:38Z'
  }
  
  const messageTwo = {
    id: 'message-two',
    userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    timestamp: '2017-02-09T04:27:38Z'
  }
  
  expect(
    reducer({}, { type: 'MESSAGES_FULFILLED', payload: [message, messageTwo]})
  ).toEqual(
    {
      [message.id]: message,
      [messageTwo.id]: messageTwo
    }
  )
})