import React, { Component, version } from "react";
import './Home.css'
import { withRouter } from "react-router";
import AddQuestions from "../questions/AddQuestions";

class Home extends Component {
  constructor(props) {
    super(props);

    // [{
    //     'question': "Question 1",
    //     'answer': 'correct',
    //     'options': ['corr', 'correc', 'correct', 'corre']
    // }]
    this.state = {
      //   answers: JSON.parse(localStorage.getItem("answers")),
      addQuestions: false,
      dummyQuestions: [
        {
          question: "A for ?",
          answer: "apple",
          option: ["apple", "alphabet", "aerospace"]
        },
        {
          question: "B for",
          answer: "ball",
          option: ["boss", "ball", "bee"]
        },
        {
            question: "C for",
            answer: "cat",
            option: ["cot", "cat", "cough"]
          }
      ],
      arrayCount: 0,
      marks: 0,
      userAnswer: null
    };
  }

  answerChange = event => {
    this.setState(
      {
        userAnswer: event.target.value
      },
      () => {
        console.log(this.state.userAnswer);
      }
    );
  };

  next = (event) => {

    event.preventDefault();
    const { userAnswer, dummyQuestions, arrayCount } = this.state;

    console.log("object")

    if (userAnswer === dummyQuestions[arrayCount].answer) {
      console.log("correct ans");
      this.setState({
        marks: this.state.marks + 1
      });
    }

    this.setState({
      arrayCount: this.state.arrayCount + 1,
      userAnswer: ''
    });
  };

  logout = () =>  {
      this.props.history.push("/")
  }

  addQuestions = () => {

      this.setState({
        addQuestions: true
      })
  }

  addMoreQuestions = async (addQuestions) => {
    console.log("addMoreQuestions", addQuestions)
    

    // [{
    //     'question': "Question 1",
    //     'answer': 'correct',
    //     'options': ['corr', 'correc', 'correct', 'corre']
    // }]

    let question = [{
        question: addQuestions.question,
        answer: addQuestions.answer,
        option: [
            addQuestions.option1,
            addQuestions.option2,
            addQuestions.option3
        ]
    }]

   await this.setState({
        dummyQuestions: [ ...this.state.dummyQuestions, ...question],
        addQuestions: false
    })

    alert("questions  added succesfully")
  }

  render() {
      
      const { dummyQuestions, arrayCount, marks, userAnswer } = this.state;
    return (
      <div>
        {arrayCount === dummyQuestions.length ? (
          `you have scored ${marks}`
        ) : (
          <form onSubmit={this.next}>
            <label>{dummyQuestions[arrayCount].question}</label><br />
            <input
              type="radio"
              value={dummyQuestions[arrayCount].option[0]}
              onChange={this.answerChange}
              checked={dummyQuestions[arrayCount].option[0] === userAnswer}
            />
            {dummyQuestions[arrayCount].option[0]}
            <input
              type="radio"
              value={dummyQuestions[arrayCount].option[1]}
              onChange={this.answerChange}
              checked={dummyQuestions[arrayCount].option[1] === userAnswer}
            />
            {dummyQuestions[arrayCount].option[1]}
            <input
              type="radio"
              value={dummyQuestions[arrayCount].option[2]}
              onChange={this.answerChange}
              checked={dummyQuestions[arrayCount].option[2] === userAnswer}
            />
            {dummyQuestions[arrayCount].option[2]}<br />
            <input type="submit" value="next" />
          </form>
        )}
        <div className="logout">
            <div className="logout">
                <div ><button onClick={this.logout}>logout</button></div>
                <div><button onClick={this.addQuestions}>Add Question</button></div>
            </div>
            <div className="addquestions">{ this.state.addQuestions ? <AddQuestions addMoreQuestions={(addQuestions) => this.addMoreQuestions(addQuestions)}/>:null}</div>
        </div>
      </div>
    );
  }
}


export default withRouter(Home)