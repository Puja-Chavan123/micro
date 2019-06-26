var http =require("http")

var Employee ={
    emprid:1154,
	accountno:2222222,
	emailid: "abc@gmail.com"
    empname:"abc",
   adress: "Pune",
    mobileno: 88885555
};
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(product));
};
var server=http.createServer(controller);
server.listen(70008);
console.log("listening on port 7000");



