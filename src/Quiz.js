import React, { Component } from 'react'
import "./App.css"
import {Container} from 'react-bootstrap'
import Quiz2 from './Quiz2'
import PassageOne from './PassageOne'
import QuestionsOne from './QuestionsOne'

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
             check: false,
             quizOnePassed:false,
             answers:{
                 answer1: '',
                 answer2: '',
                 answer3: '',
                 answer4: '',
                 answer5: ''
             }
        };
        this.startQuiz = this.startQuiz.bind(this);
        this.counter = this.counter.bind(this);
        this.checker = this.checker.bind(this);

    }
    startQuiz(){
        var check = !this.state.check;
        this.setState({
            check: check
        });
        
        
    }
    
    counter(event){
        if(event.target.name === 'answer1'){
            
        var answers = this.state.answers;
                 answers.answer1 = event.target.value;
                this.setState({answers: answers});
               
                
        }
        else if(event.target.name === 'answer2'){
            
            var answers = this.state.answers;
                     answers.answer2 = event.target.value;
                    this.setState({answers: answers});
                    
                    
            }
        else if(event.target.name === 'answer3'){
            
                var answers = this.state.answers;
                         answers.answer3 = event.target.value;
                        this.setState({answers: answers});
                        
                        
                }
         else if(event.target.name === 'answer4'){
            
                    var answers = this.state.answers;
                             answers.answer4 = event.target.value;
                            this.setState({answers: answers});
                           
                            
                    }


        else if(event.target.name === 'answer5'){
            
                        var answers = this.state.answers;
                                 answers.answer5 = event.target.value;
                                this.setState({answers: answers});
                                
                                
                        }
    }
     checker(){
         
         if(this.state.answers.answer1==='Annual Percentage Yield' && 
         this.state.answers.answer2==='Asset' &&
         this.state.answers.answer3==='Bond' &&
         this.state.answers.answer4==='Bankruptcy' &&
         this.state.answers.answer5==='Amortization' )
         {
             
             var quizOnePassed = !this.state.quizOnePassed;
        this.setState({quizOnePassed:quizOnePassed});   
             
         }
         else{
             alert('Read the passage again!');
             var check = !this.state.check;
        this.setState({
            check: check,
        });
         }
     }
    render() {
         var quiz;
        if (this.state.check===false){
            quiz = <PassageOne startQuiz={this.startQuiz}/>
            }
        else if (this.state.check===true){
            quiz = <QuestionsOne counter={this.counter} checker={this.checker}/>}
        if (this.state.quizOnePassed===true){
            quiz = <Quiz2 />
        }          
        
        return (
            <div className="quiz_bg">
            <Container> 
            {quiz}
            </Container>  
            </div>
        )
    }
}

export default Quiz
