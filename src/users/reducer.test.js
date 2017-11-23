import reducer from './reducer';

it('returns initial state', () => {
  expect(reducer(undefined, {})).toEqual({})
})

it('handles USERS_FULFILLED', () => {
  const userOne = {
    id: 'one',
    firstName: 'ironman',
  }
  
  const userTwo = {
    id: 'two',
    firstName: 'hulk',
  }
  
  expect(
    reducer({}, { type: 'USERS_FULFILLED', payload: [userOne, userTwo]})
  ).toEqual(
    {
      [userOne.id]: userOne,
      [userTwo.id]: userTwo,
    }
  )
})