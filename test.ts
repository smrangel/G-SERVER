import * as wq from "https://deno.land/x/websocket@v0.0.5/mod.ts";
import * as pkg from 'https://cdn.skypack.dev/pico-uid';




const wss = new wq.WebSocketServer(3080);

var sockets = [];
var actual=[];
var posicion = 4;
var rotacion = 2;
var ste = rotacion.toString();
console.log("asdas "+ste);

var send={};
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
	
  	var id = pkg.default(20);
  	var jugadores={}
  	var grupo={};
  	jugadores=model;
  	console.log(model.id);
wss.on("connection", function (ws: wq.WebSocket) {

  	//jugadores.id=id;
  	//grupo.id=jugadores.id;
  	//grupo.crear=jugadores.crear;
  	//actual.push(grupo);

  ws.on("message", function (message: string) {
    
    console.log(message);
    ws.send(message)
  });
});
const a = 1;
const b = 1243;
const c = a + b;
console.log(c);