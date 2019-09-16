
import React, { Component } from 'react'
import "./App.css"
import {Container} from 'react-bootstrap'
import Final from './Final'
import PassageTwo from './PassageTwo'
import QuestionsTwo from './QuestionsTwo'
class Quiz2 extends Component {
    constructor(props){
        super(props);
        this.state = {
             checkTwo: false,
             quizTwoPassed:false,
             answersTwo:{
                 answerTwo1: '',
                 answerTwo2: '',
                 answerTwo3: '',
                 answerTwo4: '',
                 answerTwo5: ''
             }
        };
        this.startQuizTwo = this.startQuizTwo.bind(this);
        this.counterTwo = this.counterTwo.bind(this);
        this.checkerTwo = this.checkerTwo.bind(this);

    }
    startQuizTwo(){
        var checkTwo = !this.state.checkTwo;
        this.setState({
            checkTwo: checkTwo
        });
        
        
    }
    
    counterTwo(event){
        if(event.target.name === 'answerTwo1'){
            
        var answersTwo = this.state.answersTwo;
                 answersTwo.answerTwo1 = event.target.value;
                this.setState({answersTwo: answersTwo});
                        
        }
        else if(event.target.name === 'answerTwo2' ){
            
            var answersTwo = this.state.answersTwo;
                     answersTwo.answerTwo2 = event.target.value;
                    this.setState({answersTwo: answersTwo});
                                
            }
        else if(event.target.name === 'answerTwo3' ){
            
                var answersTwo = this.state.answersTwo;
                         answersTwo.answerTwo3 = event.target.value;
                        this.setState({answersTwo: answersTwo});
                                        
                }
         else if(event.target.name === 'answerTwo4'  ){
            
                    var answersTwo = this.state.answersTwo;
                             answersTwo.answerTwo4 = event.target.value;
                            this.setState({answersTwo: answersTwo});
                                                
                    }


        else if(event.target.name === 'answerTwo5' ){
            
                        var answersTwo = this.state.answersTwo;
                                 answersTwo.answerTwo5 = event.target.value;
                                this.setState({answersTwo: answersTwo});
                                                        
                        }
    }
     checkerTwo(){
         
         if(this.state.answersTwo.answerTwo1==='401(k)' && 
         this.state.answersTwo.answerTwo2==='Annual Percentage Rate' &&
         this.state.answersTwo.answerTwo3==='Bear Market' &&
         this.state.answersTwo.answerTwo4==='Annuity' &&
         this.state.answersTwo.answerTwo5==='403(b)' )
         {
             
             var quizTwoPassed = !this.state.quizTwoPassed;
        this.setState({quizTwoPassed:quizTwoPassed});   
             
         }
         else{
             alert('Read the level 2 passage again!');
             var checkTwo = !this.state.checkTwo;
        this.setState({
            checkTwo: checkTwo,
        });
         }
     }
    render() {
         var read123;
        if (this.state.checkTwo===false){
            read123 = <PassageTwo startQuizTwo={this.startQuizTwo}/>
        }
        else if (this.state.checkTwo===true){
            read123 = <QuestionsTwo counterTwo={this.counterTwo} checkerTwo={this.checkerTwo}/>}
        if (this.state.quizTwoPassed===true){
            read123 = <Final />
        }          
        
        return (
            <div className="quiz_bg">
            <Container>
            
             
            {read123}
              
             
            
              </Container>  
            </div>
        )
    }
}

export default Quiz2
