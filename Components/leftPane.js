import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addQuestion, selectQuestion, removeQuestion} from '../actions/index';

class LeftPane extends React.Component{
	constructor(){
		super();
		this.state = {
			delete :  false
		}
		this.addQuestion = this.addQuestion.bind(this);
		this.deleteQuestion = this.deleteQuestion.bind(this);
	}

	showQuestions(){
		let questions = this.props.questions;

	}

	addQuestion(){
		let questionNo = this.props.data.questions.length + 1;
		let data = {
			question : "New Question" + (questionNo++)
		}
		this.props.addQuestion(data)
	}

	deleteQuestion(){
    	this.setState({
      		delete: !this.state.delete
   		})
  	}

  	removeQuestion(id){
    	this.props.removeQuestion(id);
  	}


  	selectQuestion(question,questionno){
  		question.questionno = questionno+1;
    	this.props.selectQuestion(question);
  	}


	render(){
		var that = this;
		var renderQuestions = this.props.data.questions.map(function(item,index) {
			console.log(item,index)
      	return(
        <li key={index} className="remove-mode-active">
          <a href="#" className="question-item" onClick={that.selectQuestion.bind(that, item, index)}>
            	{item.question}</a>
          			
        		</li>
      		)
    	})
		return(
			<div className="left-pane">
				<div className="container">
					<div className="title">
						<h4>Select your questions</h4>
					</div>
					<div className="all-questions">
						<ul>
							{renderQuestions}
						</ul>
					</div>
					<div className="actions-button">
						<button className={that.state.delete ? "button-primary disabled" : "button-primary"} onClick={this.addQuestion}>ADD</button>
						<button className={that.state.delete ? "button-primary" : "button-primary"} onClick={this.deleteQuestion}> {that.state.delete ? "CANCEL" : "DELETE"}</button>
					</div>
				</div>
			</div>	
		)
	}
}

function mapStateToProps(state) {
  return {
    data: state
  };
}
function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators({
      addQuestion: addQuestion,
      selectQuestion: selectQuestion,
      removeQuestion: removeQuestion
    }, dispatch)
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftPane);