import React, { Component } from 'react';
import {Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Row,Col } from 'reactstrap';
import img from '../assets/game1.jpg';

const GameItem = (props) => {
  return (
    <div style={{margin:"0 0 20px 0"}}>
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle>Jungle Games</CardTitle>
          <CardSubtitle>Adventure Games</CardSubtitle>
          <CardText style={{marginBottom: '5px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <hr/>
          <Details Plays="124" rating="4" name="Ebin Xavier"/>
          <Buttons/>
        </CardBody>
      </Card>
    </div>
  );
};
class Details extends Component{
  render(){
    var list=[];
    list.push(<span>Rating : </span>)
    for(var i=0;i<this.props.rating;i++){
      list.push(<i className="fa fa-star" style={{color:"#ffb363"}} key={{i}}></i>)
      }
   return (
     <div>
        Developer : <i>{this.props.name}</i>
      <div>
        <span>Plays : {this.props.Plays} K</span>
      </div>
      <div style={{marginBottom:'10px'}}>
      {list}
      </div>
    </div>
  )
}
}


class Buttons extends Component{
  render(){
   return (
   <div className="text-center">
    <Button color="success">Play</Button>{' '}
    <Button color="primary">View</Button>
   </div>
  )
}
}

class Home extends Component {
    render() {
      return (
        <Container className="pageBody">
          <Row>
            <Col md={{size:4}} sm={{size:6}} xl={{size:3}} xs={{size:12}}><GameItem/></Col>
            <Col md={{size:4}} sm={{size:6}} xl={{size:3}} xs={{size:12}}><GameItem/></Col>
            <Col md={{size:4}} sm={{size:6}} xl={{size:3}} xs={{size:12}}><GameItem/></Col>
            <Col md={{size:4}} sm={{size:6}} xl={{size:3}} xs={{size:12}}><GameItem/></Col>
        </Row>
       </Container>
      );
    }
  }

export default Home;