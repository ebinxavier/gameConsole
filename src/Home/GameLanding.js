import React, { Component } from 'react';
import {Card,CardText,CardTitle,Button,Row,Col} from 'reactstrap';
import '../App.css';
import {getServerDate,setServerData} from './Api'

class GameLanding extends Component {
    render() {
      return (
        <div className="pageBody container">   
            <Row>
            <Col md={{ size: 4, offset: 1 }} sm="6" xs="12" style={{marginTop:"20px"}}>
                <Card body>
                <CardTitle>Host</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button color="danger">Host Game</Button>
                </Card>
            </Col>
            <Col md={{ size: 4, offset: 1 }} sm="6" xs="12" style={{marginTop:"20px"}}>
                <Card body>
                <CardTitle>Join</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button  color="success">Join Game</Button>
                </Card>
            </Col>
            </Row>
        </div>
      );
    }
  }

export default GameLanding;