const editReducer = (state=null, action) => {
  switch(action.type) {
    case 'EDIT_QUESTION':
      return action.payload;
    
    default:
      return state;
   }
};

export default editReducer;