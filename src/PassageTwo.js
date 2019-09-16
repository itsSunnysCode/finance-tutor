import React, { Component } from 'react'
import { Button, Container, Row, Col} from 'react-bootstrap'
class PassageTwo extends Component {
    render() {
        return (
            <div>
            <Container>
            <Row>
              <Col><h1 className="level">LEVEL 2</h1></Col>
            </Row>
            <Row>
            <Col>
            <p className="passage">
            1. Bear Market – A market condition where securities are falling and 
            investors have a pessimistic outlook on the market as a whole. <br />
            2. APR – Annual Percentage Rate.  The annual cost of a loan; including all fees and interest.  Expressed as a 
            percentage.<br /> 
            3. Annuity – A financial product designed to grow an individual’s funds and then upon annuitization, pay a fixed payment for the designated
             number of periods.  Annuities are used primarily as a way to secure cash flow during retirement years.<br />
            4. 403(b) Tax Sheltered Annuities – A qualified retirement plan for eligible employees of public schools,
            tax-exempt organizations and eligible ministers, mainly for non-profit organizations.<br />
            5.  401(k) Tax Sheltered Annuities– A qualified retirement plan through an employer to which eligible employees
            can make salary deferral (salary reduction) contributions on a post-tax and/or pretax basis.<br />    
                 </p>
                 </Col>
                 </Row>
                 <Row>
            <Col className="start"> <Button   variant="success" size="lg" onClick={this.props.startQuizTwo}>Start the Quiz</Button></Col>
                </Row>
                 </Container> 
            </div>
        )
    }
}

export default PassageTwo
