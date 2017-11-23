import { 
  selectMessages,
  selectMessagesAsArray,
  selectMessagesOrderedByTimestamp, 
  selectMessageList,
} from './selectors';

describe('selectMessages', () => {
  it('returns message from state', () => {
    expect(selectMessages({ messages: 'messages' })).toEqual('messages')
  })
})

describe('selectMessagesAsArray', () => {
  it('returns messages as an array', () => {
    const messageOne = 'message one';
    const messageTwo = 'message two';

    const state = { 
      messages: {
        'one': messageOne,
        'two': messageTwo,
      }
    };

    expect(selectMessagesAsArray(state)).toEqual([messageOne, messageTwo])
  })
})

describe('selectMessageOrderedByTimestamp', () => {
  it('orders messages by timestamp', () => {
    const messageOne =   {
      id: 'one',
      timestamp: '2016-11-09T05:04:58Z'
    }
    const messageTwo =   {
      id: 'two',
      timestamp: '2017-02-09T04:27:38Z'
    }
  
    const state = { 
      messages: {
        'one': messageOne,
        'two': messageTwo,
      }
    };
  
    expect(selectMessagesOrderedByTimestamp(state))
      .toEqual([messageTwo, messageOne]);
  })
})

describe('selectMessageList', () => {
  it('returns an array of message blocks with the avatarUrl', () => {
    const messageOne =   {
      id: 'one',
      timestamp: '2016-11-09T05:04:58Z',
      userId: 'userOne'
    }
    const messageTwo =   {
      id: 'two',
      timestamp: '2017-02-09T04:27:38Z',
      userId: 'userTwo'
    }
  
    const userOne = {
      id: 'userOne',
      avatar: 'aaa',
      email: 'emailOne',
    };

    const userTwo = {
      id: 'userTwo',
      avatar: 'bbb',
      email: 'emailTwo',
    };

    const state = { 
      messages: {
        'one': messageOne,
        'two': messageTwo,
      },
      users: {
        userOne,
        userTwo,
      }
    };
  
    const expected = [
      {
        ...messageTwo,
        timestamp: '2017 Feb 09 - 04:27',
        avatarUrl: userTwo.avatar,
        email: userTwo.email,
      },
      {
        ...messageOne,
        timestamp: '2016 Nov 09 - 05:04',
        avatarUrl: userOne.avatar,
        email: userOne.email,
      },
    ]

    expect(selectMessageList(state))
      .toEqual(expected);
  })
})