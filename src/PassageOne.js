import React, { Component } from 'react'
import { Button, Container, Row, Col} from 'react-bootstrap'
import './App.css'
class PassageOne extends Component {
    render() {
        return (
            <div>
            <Container>
            <Row>
              <Col><h1 className="level">LEVEL 1</h1></Col>
            </Row>
            <Row>
            <Col>
            <p className="passage">
            1. Bond – A debt instrument used by corporations, 
                governments (including Federal, State and City) and many other institutions that are used to generate
                 capital.  The investor does not become part owner like a shareholder, but does have a greater claim 
                 on the issuer’s income than a shareholder.<br />
            2. Amortization – Paying off of debt in regular payments over a period of time.<br /> 
            3. Asset – Any resource that has economic value that an individual or corporation owns.<br />
            4.APY – Annual Percent Yield. The annual return of an investment for a one-year period.
            This rate includes compounding, which makes it greater than the periodic interest rate multiplied by the
             number of periods.<br />
            5. Bankruptcy – A legal proceeding in which a debtor’s assets are liquidated and the debtor is released 
            from further liability.<br />    
                 </p>
                 </Col>
                 </Row>
                 <Row>
            <Col className="start"> <Button   variant="success" size="lg" onClick={this.props.startQuiz}>Start the Quiz</Button></Col>
                </Row>
                 </Container>
            </div>
        )
    }
}

export default PassageOne
