const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("Server started on port 5000");
});

app.get('/hello', (req, res) => {
    res.send("Hello, received GET request");
});
app.post('/hello',(req,res)=>
{
    res.send("hello received post request")
})
app.delete('/hello',(req,res)=>
    {
        res.send("hello received delete request")
    })
app.put('/hello',(req,res)=>
        {
            res.send("hello received put request")
        })
app.get('/open', (req, res) => {
            res.sendFile('C:/Users/rishi/Desktop/KMIT/wt/class/restapi/test.html');
        })