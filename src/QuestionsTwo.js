import React, { Component } from 'react'
import { Button, Container, Row, Col} from 'react-bootstrap'
 class QuestionsTwo extends Component {
    render() {
        return (
            <div>
            <Container>
            <Row>
              <Col><h1 className="level">LEVEL 2</h1></Col>
            </Row>
            <Row><Col><p>1. A qualified retirement plan through an employer to which eligible employees
            can make salary deferral contributions on a post-tax and/or pretax basis.
           </p></Col></Row>
           <Row>
           <Col><input type='radio' name='answerTwo1' value='Annuity' onChange={this.props.counterTwo} />Annuity</Col>
           <Col><input type='radio' name='answerTwo1' value='Annual Percentage rate' onChange={this.props.counterTwo}/>Annual Percentage rate</Col>
           </Row>
           <Row>
           <Col><input type='radio' name='answerTwo1' value='401(k)' onChange={this.props.counterTwo}/>401(k)</Col>
           <Col><input type='radio' name='answerTwo1' value='Bond' onChange={this.props.counterTwo}/>Bond</Col>
           </Row>
           

           <Row><Col><p>2. The annual cost of a loan; including all fees and interest. Expressed as a 
           percentage.
           </p></Col></Row>
           <Row>
           <Col><input type='radio' name='answerTwo2' value='Annual Percentage Yield' onChange={this.props.counterTwo}/>Annual Percentage Yield</Col>
           <Col><input type='radio' name='answerTwo2' value='Annual Percentage Rate' onChange={this.props.counterTwo}/>Annual Percentage Rate</Col>
           </Row>
           <Row>
           <Col><input type='radio' name='answerTwo2' value='Asset' onChange={this.props.counterTwo} />Asset</Col>
           <Col><input type='radio' name='answerTwo2' value='Bond' onChange={this.props.counterTwo}/>Bond</Col>
           </Row>

           <Row><Col><p>3. A market condition where securities are falling and 
           investors have a pessimistic outlook on the market as a whole.
           </p></Col></Row>
           <Row>
           <Col><input type='radio' name='answerTwo3' value='Annual Percentage Yield' onChange={this.props.counterTwo}/>Annual Percentage Yield</Col>
           <Col><input type='radio' name='answerTwo3' value='Bear Market' onChange={this.props.counterTwo}/>Bear Market</Col>
           </Row>
           <Row>
           <Col><input type='radio' name='answerTwo3' value='Asset' onChange={this.props.counterTwo}/>Asset</Col>
           <Col><input type='radio' name='answerTwo3' value='Bond' onChange={this.props.counterTwo}/>Bond</Col>
           </Row>
           <Row><Col><p>4.  Used primarily as a way to secure cash flow during retirement years.
           </p></Col></Row>
           <Row>
           <Col><input type='radio' name='answerTwo4' value='Annual Percentage Yield' onChange={this.props.counterTwo}/>Annual Percentage Yield</Col>
           <Col><input type='radio' name='answerTwo4' value='Amortization' onChange={this.props.counterTwo}/>Amortization</Col>
           </Row>
           <Row>
           <Col><input type='radio' name='answerTwo4' value='Annuity' onChange={this.props.counterTwo}/>Annuity</Col>
           <Col><input type='radio' name='answerTwo4' value='Bankruptcy' onChange={this.props.counterTwo}/>Bankruptcy</Col>
           </Row>
           <Row><Col><p>5. A qualified retirement plan for eligible employees of public schools,
           tax-exempt organizations and eligible ministers, mainly for non-profit organizations.
           </p></Col></Row>
           <Row>
           <Col><input type='radio' name='answerTwo5' value='Annual Percentage Yield' onChange={this.props.counterTwo}/>Annual Percentage Yield</Col>
           <Col><input type='radio' name='answerTwo5' value='Amortization' onChange={this.props.counterTwo}/>Amortization</Col>
           </Row>
           <Row>
           <Col><input type='radio' name='answerTwo5' value='Annuity' onChange={this.props.counterTwo}/>Annuity</Col>
           <Col><input type='radio' name='answerTwo5' value='403(b)' onChange={this.props.counterTwo}/>403(b) </Col>
           </Row>

           <Row>
           <Col className="start"> <Button   variant="success" size="lg" onClick={this.props.checkerTwo}>Next</Button></Col>
               </Row>

           </Container>
            </div>
        )
    }
}

export default QuestionsTwo
