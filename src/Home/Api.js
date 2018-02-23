import openSocket from 'socket.io-client';
import axios from 'axios';

const  socket = openSocket('http://localhost:3030', { query: "foo=bar" });

var clientID = null;
axios.get('http://localhost:3030/connect')
    .then(response => {
            clientID = response.data.clientID;
            console.log(clientID);
    })



    

function getServerData(cb){
socket.on("dataFromServer",data=>{
    cb(data);  
}); 
}
function setServerData(data){
    socket.emit("dataToServer",data);
}
// socket.emit("dataToServer","testing");
function makeRoom(name){
axios.get('http://localhost:3030/makeRoom?roomName='+name)
    .then(response => {
        debugger;
           if(response.data.success)
                console.log("Room Created");
            else
                console.log("Error in creating room");
    })
}
function listRooms(){
    axios.get('http://localhost:3030/listRooms')
    .then(response => {
            console.log(response.data);
    })
}





export {makeRoom,listRooms}