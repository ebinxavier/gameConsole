import {Form,
    FormGroup,
    Label,
    Input,
    FormText,
    FormFeedback,
    Container,
    Row,
    Col,
    Button} from 'reactstrap';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignIn extends Component {
    render() {
      return (
        <Container className="pageBody">
            <Row>
                <Col md={{size:3,offset:3}} sm="12" xs="12">
                    <h1>Sign In</h1>
                </Col>
                <Col md={{size:4,offest:2}} sm="12" xs="12">
                <Form>
                        <FormGroup>
                            <Label className="text-success" for="exampleEmail">Join Us as a Developer</Label>
                            <Input placeholder="Enter User Name" />
                        </FormGroup>
                        <FormGroup>
                            {/* <Label for="examplePassword">Input with danger</Label> */}
                            <Input  type="password" placeholder="Pasword"/>
                            <FormFeedback>Oh noes! that name is already taken</FormFeedback>                            
                        </FormGroup>
                        <FormGroup>
                            <Button color="success">SignIn</Button>
                            <FormText> Don't Have an Account ? <Link to="/signup">Sign Up</Link> </FormText>
                        </FormGroup>
                </Form>
                </Col>
            </Row>
        </Container>
      );
    }
  }

  export default SignIn;
