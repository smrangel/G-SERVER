import { WebSocket, WebSocketServer } from "https://deno.land/x/websocket@v0.0.5/mod.ts";
import * as pkg from 'https://cdn.skypack.dev/pico-uid';




const wss = new WebSocketServer(3080);

var sockets = [];
var actual=[];
var posicion = 4;
var rotacion = 2;


var send={};

wss.on("connection", function (WebSocket) {
	console.log("asfasf");
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
	sockets.push(ws);
  	var uid = pkg.default(20);
  	var jugadores={};
  	var grupo={};
  	jugadores=model;
  	jugadores.id=id;
  	grupo.id=jugadores.id;
  	grupo.crear=jugadores.crear;
  	actual.push(grupo);

  ws.on("message", function (string) {
    	// _id = toString(ws._socket._handle.fd);
	  	var bufferOne = Buffer.from(message);
	  	var json = JSON.stringify(bufferOne.toString());
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
});
const a = 1;
const b = 1243;
const c = a + b;
console.log(c);