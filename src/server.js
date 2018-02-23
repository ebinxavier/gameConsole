var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var uniqid = require('uniqid');

server.listen(3030);
var rooms=[];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/connect',(req, res)=> {
    res.send({clientID:uniqid()});
});

app.get('/makeRoom',(req,res)=>{
    console.log(req.query.roomName);
    if(rooms.indexOf(req.query.roomName)==-1){
        rooms.push(req.query.roomName);
        res.send({success:true}); 
    }
})
app.get('/listRooms',(req,res)=>{
    res.send(rooms);
})

io.on('connection', function (socket) {
  var handshakeData = socket.request;
  console.log("middleware:", handshakeData._query['foo']);


  socket.emit('dataFromServer', { hello: 'world' });


  socket.on("dataToServer",data=>{
        if(data.type=='host'){
            
            socket.join(data.name);
            console.log("DataFromServer: ",data.type);
        }
        else if(data.type=="join"){
            socket.join(data.name);
        }
        else if(data.type=="ls"){
            socket.to(data.name).emit('lsResponse',rooms);
        }
    }) 

  socket.on('disconnect', function(){
        console.log('Client disconnected');
    });
});


