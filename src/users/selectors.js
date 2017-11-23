export const selectUsers = state => state.users;

export const selectAvatarUrl = (userId, state) => {
  const users = selectUsers(state);
  
  return users[userId] && users[userId].avatar
};

export const selectEmail = (userId, state) => {
  const users = selectUsers(state);
  
  return users[userId] && users[userId].email
}