
export default (state = {}, action) => {
  switch(action.type){
    case 'MESSAGES_FULFILLED':
      return action.payload.reduce((prev, curr) => {
        return {
          ...prev,
          [curr.id]: curr
        }
      }, {})
    default:
      return state;
  }
}