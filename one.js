let http=require('http')
const server=http.createServer(function(request,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Heelo world")
})
server.listen(3000,function(){
    console.log('server running at http://127.0.0.1:3000')
});