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

class SignUp extends Component {
    render() {
      return (
        <Container className="pageBody">
            <Row>
                <Col md={{size:3,offset:3}} sm="12" xs="12">
                    <h1>Sign Up</h1>
                </Col>
                <Col md={{size:4,offest:2}} sm="12" xs="12">
                <Form>
                        <FormGroup>
                            <Label className="text-success" for="exampleEmail">Join Us as a Developer</Label>
                            <Input placeholder="Enter User Name" />
                        </FormGroup>
                        <FormGroup>
                            <Input  type="password" placeholder="Pasword"/>
                            <FormFeedback>Oh noes! that name is already taken</FormFeedback>                            
                        </FormGroup>
                        <FormGroup>
                            {/* valid={false} */}
                            <Input  type="password" placeholder="Re-Enter Pasword"/>
                            <FormFeedback>MissMatch in password</FormFeedback>                            
                        </FormGroup>
                        <FormGroup>
                            <Button color="success">SignIn</Button>
                            <FormText> Already a member ? <Link to="/signin">Sign In</Link> </FormText>
                        </FormGroup>
                </Form>
                </Col>
            </Row>
        </Container>
      );
    }
  }

  export default SignUp;
