import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editQuestion,addQuestionWithOptions,editQuestionText} from '../actions/index';

class RightPane extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      imageURL: "",
      optioncount : 0,
      questionAdded : false,
      questionText : props.data.currentquestion && props.data.currentquestion.question ? props.data.currentquestion.question : ""
    }
    this.addQuestionWithOptions = this.addQuestionWithOptions.bind(this);
    this.editQuestionText = this.editQuestionText.bind(this);
  }

  editQuestionText(questionno,e,option){
    this.setState({
      questionText : e.target.value
    })
    this.props.editQuestionText(e.target.value,questionno)
  }

  handleOptionsCount(e,value,index){
    let noOfOptions = e.target.value;
    let optionsobj={};
    this.props.data.currentquestion.options = {};
    for(let count=0;count<noOfOptions;count++){
      let optionNo = count+1;
       this.props.data.currentquestion.options[optionNo] = '';
    }
    //this.props.data.currentquestion.options = optionsobj
    this.buildOptions(e.target.value)
    this.setState({
      optioncount: e.target.value
    })
  }

  editOption(index,e){
    this.props.data.currentquestion.options[index] = e.target.value
  }

  buildOptions(thisClass){
    let that = thisClass
    let optioncount = this.state.optioncount
    let optionsArr = []
      for(let i=0;i<optioncount;i++){
        optionsArr.push(
          <div key={i+1} className="form-group">
              <label className="form-label">Option {i+1}</label>
              <input className="form-control option-text" type="text"
                onChange={this.editOption.bind(that, i+1)} 
                value={this.props.data.currentquestion.options ? this.props.data.currentquestion.options.c : "No option"}/>
            </div>
          
        )
    }
    return optionsArr;
  }

  addQuestionWithOptions(){
    console.log(this.props.data)
    this.props.addQuestionWithOptions(this.props.data)
    
  }

  addOptions(currentquestion) {
    console.error(currentquestion)
  }

  render(){
    if (!this.props.data.currentquestion) {
      return (
        <div className="right-pane">
          <div className="container">
            <div className="page-title">
              <h2>Please choose a question to design</h2>
            </div>
          </div>
        </div>
      )
    }

    return(
      <div className="right-pane">
        <div className="container">
          <div className="page-title">
            <h2>Design Question</h2>
          </div>
          <div className="edit-question">
            <div className="form-group">
              <label className="form-label">Question</label>
              <input className="form-control" type="text" value={this.props.data.currentquestion && this.props.data.currentquestion.question ? this.props.data.currentquestion.question:''} onChange={this.editQuestionText.bind(this,this.props.data.currentquestion.questionno)}/>
            </div>
            <div className="form-group">
              <label className="form-label">Options</label>
              <select className="form-control" onChange={this.handleOptionsCount.bind(this)}>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>
          <div>{this.state.questionAdded? null: this.buildOptions(this)}</div>
          <div className="actions-button">
            <button className={this.state.delete ? "button-primary disabled" : "button-primary"} onClick={() => this.addOptions(this.props.data.currentquestion)}>ADD</button>
            <button className={this.state.delete ? "button-primary" : "button-primary"}>DELETE</button>
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
      addQuestionWithOptions : addQuestionWithOptions,
      editQuestionText :  editQuestionText
    }, dispatch)
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPane);