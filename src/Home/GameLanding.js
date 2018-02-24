import React, { Component } from 'react';
import {Card,CardText,CardTitle,Button,Row,Col,FormGroup,Label,Input} from 'reactstrap';
import '../App.css';
import socketIOClient from "socket.io-client";
import axios from 'axios'


class GameLanding extends Component {
    constructor() {
        super();
        this.state = {
          response: false,
          endpoint: "http://192.168.0.104:3030"
        };
      }
      componentDidMount() {
        this.getGroups();
        const { endpoint } = this.state;
        var socket = socketIOClient(endpoint);
        // socket.emit('createRoom', 'room');
        this.setState({
                        add:()=>{
                            var room=document.getElementById('room').value;
                            socket.emit('createRoom', room,(status)=>{
                                alert(status);
                                if(status==='created'){
                                    this.setState({joiningRoom:room})
                                }
                            });
                        },
                        emit:function(){
                            var msg=document.getElementById('msg').value;
                            var room=this.state.joiningRoom;
                            socket.emit("data",msg,room);
                        },
                        join:function(room){
                            socket.emit('joinRoom', room,function(status){
                                alert(status);
                            });
                        }
                    });
        socket.on("data",(data)=>{
            if(data!=='groupCreated')
                alert(data);
            switch(data){
                case "groupCreated":
                    this.getGroups();
                    break;
                default:;
            }
        })
      }

    getGroups=()=>{
        axios.get("http://192.168.0.104:3030/getRooms").then((res)=>{
            console.log(res.data);
            this.setState({groups:res.data})
        })
    }
    joinGroup=()=>{
        if(this.state.joiningRoom){
            this.state.join(this.state.joiningRoom);
        }
    }
    render() {
        
        var list= this.state.groups?this.state.groups.map((data)=>
        <FormGroup check>
        <Label check>
          <Input type="radio" onClick={()=>{
              this.setState({joiningRoom:data})
              alert(data);
          }} name="radio1" />{' '}
          {data}
        </Label>
      </FormGroup>)
        :'';
      return (
        <div className="pageBody container">   
            <Row>
            <Col md={{ size: 4, offset: 1 }} sm="6" xs="12" style={{marginTop:"20px"}}>
                <Card body>
                <CardTitle>Host</CardTitle>
                <FormGroup>
                    <Label className="text-success">Host Name</Label>
                    <Input id="room" placeholder="Enter Host Name" />
                </FormGroup>
                <Button onClick={this.state.add} color="danger">Host Game</Button>
                <FormGroup>
                    <Label className="text-success">msg</Label>
                    <Input id="msg" placeholder="Enter msg" />
                </FormGroup>
                <Button onClick={this.state.emit} color="danger">send</Button>
                </Card>
            </Col>
            <Col md={{ size: 4, offset: 1 }} sm="6" xs="12" style={{marginTop:"20px"}}>
                <Card body>
                <CardTitle>Join</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <ul>{list}</ul>
                <Button  color="success" onClick={this.joinGroup}>Join Game</Button>
                </Card>
            </Col>
            </Row>
        </div>
      );
    }
  }

export default GameLanding;