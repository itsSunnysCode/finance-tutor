import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Cover from './Cover';
import Quiz from './Quiz';
import './App.css';


class App extends Component {
  
  constructor(props){
    super(props);
      this.state = {
          toInitiateQuiz: false
      };
        this.start = this.start.bind(this);
    }

    //to start quiz
  start(){
    var toInitiateQuiz = !this.state.toInitiateQuiz;
    this.setState({toInitiateQuiz: toInitiateQuiz});
  }
  render() {
    var initiate;
    if (this.state.toInitiateQuiz===true){
      initiate=<Quiz />
    }
    else{
      initiate=<Cover start={this.start} />
    }
    return (
      <div>
        
        {initiate}
      </div>
    )
  }
}

export default App
