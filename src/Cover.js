import React, { Component } from 'react'
import './App.css';
import { Button, Container, Row, Col} from 'react-bootstrap'

 
  class Cover extends Component {
   render() {
     return (
       <div className="bg">
         
         <Container>
          <Row>
            <Col><h1 className="heading">Finance Tutor</h1></Col>
          </Row>
          <Row>
            <Col><p className="paragraph">Ideal for beginners</p></Col>
          </Row>
          <Row>
            <Col className="rules"><p ><strong>Rule: 1</strong><br />Read the passage, start the quiz.</p></Col>
          </Row>
          <Row>
            <Col className="rules"><p ><strong>Rule: 2</strong><br />The passage will be hidden, after starting the quiz.</p></Col>
          </Row>
          <Row>
            <Col className="rules"><p><strong>Rule: 3</strong><br />To move to next level, get all
             the answers correct, otherwise Restart the quiz, again.</p></Col>
          </Row>
          <Row>
            <Col className="start"> <Button variant="success" onClick = {this.props.start} size="lg">Start</Button></Col>
          </Row>
        
         
          </Container>
         
       </div>
     )
   }
 }
 
 export default Cover
 
