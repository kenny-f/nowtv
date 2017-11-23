import { selectUsers, selectAvatarUrl, selectEmail } from "./selectors";

describe('selectUsers', () => {
  it('returns users from state', () => {
    const state = {
      users: 'users'
    }
    expect(selectUsers(state)).toEqual('users')
  })
})

describe('selectAvatarUrl', () => {
  it('returns the avatar for the user', () => {
    const userId = 'userId'
    const state = {
      users: {
        [userId]: {
          id: userId,
          avatar: 'avatar.png'
        }
      }
    }

    expect(selectAvatarUrl(userId, state)).toEqual('avatar.png')
  })
})

describe('selectEmail', () => {
  it('returns the email for the user', () => {
    const userId = 'userId'
    const state = {
      users: {
        [userId]: {
          id: userId,
          email: 'iron.man@marvel.com'
        }
      }
    }

    expect(selectEmail(userId, state)).toEqual('iron.man@marvel.com')
  })
})