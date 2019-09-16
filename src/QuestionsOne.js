import React, { Component } from 'react'
import { Button, Container, Row, Col} from 'react-bootstrap'
class QuestionsOne extends Component {
    render() {
        return (
            <div>
            <Container>
            <Row>
              <Col><h1 className="level">LEVEL 1</h1></Col>
            </Row>
            <Row ><Col><p className="questions">1. The annual return of an investment for a one-year period.
            This rate includes compounding, which makes it greater than the periodic interest rate
            multiplied by the number of periods.
           </p></Col></Row>
           <Row>
           <Col><input type='radio' name='answer1' value='Annual Percentage Yield' onChange={this.props.counter} />Annual Percentage Yield</Col>
           <Col><input type='radio' name='answer1' value='Annual Percentage rate' onChange={this.props.counter}/>Annual Percentage rate</Col>
           </Row>
           <Row>
           <Col><input type='radio' name='answer1' value='Annuity' onChange={this.props.counter}/>Annuity</Col>
           <Col><input type='radio' name='answer1' value='Bond' onChange={this.props.counter}/>Bond</Col>
           </Row>
           

           <Row><Col><p className="questions">2. Any resource that has economic value that an individual or corporation owns.
           </p></Col></Row>
           <Row>
           <Col><input type='radio' name='answer2' value='Annual Percentage Yield' onChange={this.props.counter}/>Annual Percentage Yield</Col>
           <Col><input type='radio' name='answer2' value='Bear Market' onChange={this.props.counter}/>Bear Market</Col>
           </Row>
           <Row>
           <Col><input type='radio' name='answer2' value='Asset' onChange={this.props.counter} />Asset</Col>
           <Col><input type='radio' name='answer2' value='Bond' onChange={this.props.counter}/>Bond</Col>
           </Row>

           <Row><Col><p className="questions">3. A debt instrument used by corporations, governments (including Federal, State and City)
            and many other institutions that are used to generate capital. The investor does not become part owner
             like a shareholder, but does have a greater claim on the issuer’s income than a shareholder.
           </p></Col></Row>
           <Row>
           <Col><input type='radio' name='answer3' value='Annual Percentage Yield' onChange={this.props.counter}/>Annual Percentage Yield</Col>
           <Col><input type='radio' name='answer3' value='Bear Market' onChange={this.props.counter}/>Bear Market</Col>
           </Row>
           <Row>
           <Col><input type='radio' name='answer3' value='Asset' onChange={this.props.counter}/>Asset</Col>
           <Col><input type='radio' name='answer3' value='Bond' onChange={this.props.counter}/>Bond</Col>
           </Row>
           <Row><Col><p className="questions">4. A legal proceeding in which a debtor’s assets 
           are liquidated and the debtor is released from further liability.
           </p></Col></Row>
           <Row>
           <Col><input type='radio' name='answer4' value='Annual Percentage Yield' onChange={this.props.counter}/>Annual Percentage Yield</Col>
           <Col><input type='radio' name='answer4' value='Amortization' onChange={this.props.counter}/>Amortization</Col>
           </Row>
           <Row>
           <Col><input type='radio' name='answer4' value='Annuity' onChange={this.props.counter}/>Annuity</Col>
           <Col><input type='radio' name='answer4' value='Bankruptcy' onChange={this.props.counter}/>Bankruptcy</Col>
           </Row>
           <Row><Col><p className="questions">5. Paying off of debt in regular payments over a period of time.
           </p></Col></Row>
           <Row>
           <Col><input type='radio' name='answer5' value='Annual Percentage Yield' onChange={this.props.counter}/>Annual Percentage Yield</Col>
           <Col><input type='radio' name='answer5' value='Amortization' onChange={this.props.counter}/>Amortization</Col>
           </Row>
           <Row>
           <Col><input type='radio' name='answer5' value='Annuity' onChange={this.props.counter}/>Annuity</Col>
           <Col><input type='radio' name='answer5' value='Bankruptcy' onChange={this.props.counter}/>Bankruptcy</Col>
           </Row>

           <Row>
           <Col className="start"> <Button   variant="success" size="lg" onClick={this.props.checker}>Next</Button></Col>
               </Row>

           </Container>
            </div>
        )
    }
}

export default QuestionsOne
