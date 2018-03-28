const mapStateTProps = (state) => {
	data: state
}

const mapDispatchToProps = (dispatch) => {
	addQuestion: () => dispacth(addQuestion()),
    selectQuestion: () => dispatch(selectQuestion()),
    removeQuestion: () => dispatch(removeQuestion()),
}