var sys=require('sys');
	http=require('http');
	
var operations={
myFun: function(a,b,c){
	var d = (b*b) - (4*a*c);
	var x1=0,x2=0;
  if(d > 0){
		x1 = parseFloat((-b + Math.sqrt(d))/(2*a)).toFixed(4);
		x2 = parseFloat((-b - Math.sqrt(d))/(2*a)).toFixed(4);
	  }
	  else if(d ==0){
		x1 = x2 = parseFloat(-b/(2*a)).toFixed(4);
	  }
	  else if(d < 0){
		x1 = "notFound";
		x2= "notFound";
}
return x1+" "+x2;
}
/*add:function(a,b) {return a+b;},
sub:function(a,b) {return a-b;},
mul:function(a,b) {return a*b;},
div:function(a,b) {return a/b;}
*/
}
http.createServer(function(req,res){
var parts= req.url.split("/"),
	o= operations[parts[1]],
	a= parseInt(parts[2],10),
	b= parseInt(parts[3],10);
	c= parseInt(parts[4],10);
	
	var result = o ? o(a,b,c) : "Error";
//sys.puts(sys.inspect(parts));
res.writeHead(200,{'Content-Type': 'text/plain'});
//res.write("<h1>Hello World</h1>");
var r = result.split(" ");
res.end("{" + 
"\"x1\":"+r[0]+", "+
"\"x2\":"+r[1]
+"}");
}).listen(process.env.PORT||3000);

//sys.puts("Server Running 3l http://127.0.0.1:3000/ Ya habib");
