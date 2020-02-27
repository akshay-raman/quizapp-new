import React, { Component } from 'react'
import './AddQuestions.css'

class AddQuestions extends Component {
    constructor(props){
        super(props);

        this.state = {
            question: null,
            answer: null,
            option1: null,
            option2: null,
            option3: null
        }
    }

    handleChange = (event) => {
        console.log("addquestion handleChange");

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addQuestions = () => {
        const {question, answer, option1, option2, option3} = this.state;

        let questionList = {
            question: question,
            answer: answer,
            option1: option1,
            option2: option2,
            option3: option3
        }

        this.props.addMoreQuestions(questionList)
    }

    render() {
        const {question, answer, option1, option2, option3} = this.state;

        return (
            <div className="modal_bg">
                <div className="modal">
                Question : <input type="text" name="question" value={question} onChange={this.handleChange}></input><br />
                answer : <input type="text" name="answer" value={answer} onChange={this.handleChange}></input><br />
                option A : <input type="text" name="option1" value={option1} onChange={this.handleChange}></input><br />
                option B : <input type="text" name="option2" value={option2} onChange={this.handleChange}></input><br />
                option C : <input type="text" name="option3" value={option3} onChange={this.handleChange}></input><br />
                <button onClick={this.addQuestions}>add</button>
                </div>
            </div>
        )
    }
}

export default AddQuestions
