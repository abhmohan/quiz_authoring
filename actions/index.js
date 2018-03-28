// Add Question Action
export const addQuestion = (data) => {
  return {
    type: 'ADD_QUESTION',
    payload: data
  }
}

// Select Question Action
export const selectQuestion = (question,questionno) => {
  return {
    type: 'EDIT_QUESTION',
    payload: question,
    
  }
}

// Remove Question Action
export const removeQuestion = (id) => {
  return {
    type: 'REMOVE_QUESTION',
    payload: id
  }
}

export const editQuestion = (questionno,option) => {

}

export const editQuestionText = (questiontext,questionno) => {
  return {
    type: 'EDIT_QUESTION_TEXT',
    payload: {
      questiontext:questiontext,
      questionno:questionno 
    }
  }
}

export const addQuestionWithOptions = (data) => {
  return {
    type : 'ADD_QUESTION_OPTIONS',
    payload  : data
  }
}