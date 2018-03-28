
const questionsReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_QUESTION':
      const newQuestion = action.payload;
      return [
        ...state,
        newQuestion
      ]
    case 'REMOVE_QUESTION':
      const idToRemove = action.payload;
      const newState = state.filter((item) => item.id !== idToRemove);
      return state = newState;
    case 'ADD_QUESTION_OPTIONS' :
      const  newStateWithOptions = action.payload.questions;
      return [
        ...newStateWithOptions
      ]
      case 'EDIT_QUESTION_TEXT' :
        let questionarr = [...state]
        for(let i=0;i<questionarr.length;i++){
          if(questionarr[i].questionno && (questionarr[i].questionno == action.payload.questionno))
            questionarr[i].question = action.payload.questiontext
        }
        return questionarr
    default:
      return state;
   }
};

export default questionsReducer;