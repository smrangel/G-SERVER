const uid = require('uid');
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

app.set('port', process.env.PORT||3001);
app.use(express.static(path.join(__dirname,'public')));    

const WebSocket = require('ws');
const gdCom = require('@gd-com/utils'); // var { GdBuffer } = require('@gd-com/utils')
const wss = new WebSocket.Server({ port: 3080 });
const buf = new Buffer.from([1,2,3,255]);

var sockets = [];
var actual=[];
var posicion = 4;
var rotacion = 2;



var send={};



console.log("Servidor listo");
app.listen(app.get('port'),() => {});

wss.on('connection', ws => {
	var	model={
	id:0,
	apodo:0,
	packete_act:'',
	n_pack_rest:0,
	pack:[],
	crear:{figura:0},
	cambiar:{figura:0},
	rotar:
		{
		x:0,
		y:0,
		z:0
		},

	};
	//console.log(ws);
	sockets.push(ws);
	var id=uid(20).toString();
	//var apodo=uid(4).toString();
  var jugadores={}
  var grupo={};
  jugadores=model;
  jugadores.id=id;
  grupo.id=jugadores.id;
  grupo.crear=jugadores.crear;
  actual.push(grupo);//[{id:_2141,crear},{id:_2141,crear}]
  
  //console.log("////////////")
  //console.log(JSON.stringify(jugadores));
  //console.log(jugadores[_id]);
  //let datos ={contador:1, contenido:''}
	  ws.on("message",function incoming(message){
	  	/*var recibido = Buffer.from(message)
	  	var impr = gdCom.getVar(recibido);
	  	console.log(impr.value);*/
	  	// _id = toString(ws._socket._handle.fd);
	  	let bufferOne = Buffer.from(message);
	  	let json = JSON.stringify(bufferOne.toString());
	  	var jt=bufferOne.toString();
	   
	  	if (jt!=0){var we=JSON.parse(jt);
	  	//ws.send(message);
	  	

			if(we.hasOwnProperty("rotar") === true){
				send={};
				jugadores.rotar.x = we.rotar.x; 
				jugadores.rotar.y = we.rotar.y;
				jugadores.rotar.z = we.rotar.z;
				//send.rotar=jugadores[_id].rotar;
				send.id=jugadores.id;
				send.rotar=jugadores.rotar;
				console.log(send);
				//let bufferOriginal = Buffer.from(JSON.parse(send).data);
				
				for (var i = 0;i<=sockets.length-1; i++) {
					if(sockets[i] != ws){	
						sockets[i].send(JSON.stringify(send));
					}
				}
				
			}
			if(we.hasOwnProperty("crear") === true){
				
				jugadores.crear.figura=we.crear.figura;
				send.id=jugadores.id;
				actual[actual.length-1].crear.figura=we.crear.figura;
				send.crear=jugadores.crear;
				
				//ws.send(JSON.stringify(send));
				for (var i = 0;i<=sockets.length-1; i++) {
					if(sockets[i] != ws){	
						sockets[i].send(JSON.stringify(send));
					}
					
				}
				for(var a = 0;a<actual.length; a++) {
						if(actual[a].id != actual[actual.length-1].id){
							ws.send(JSON.stringify(actual[a]));
						}
				}
			}
			/*if(we.hasOwnProperty("cambiar") === true){
				console.log(JSON.stringify(we));
				jugadores.cambiar.figura=we.cambiar.figura;
				send.id=jugadores.id;
				send.cambiar=jugadores.cambiar;
				console.log(JSON.stringify(send));
				
			}*/
	  }
	  });
  }
 );   
 