const express=require('express')
const app=express()
let port=8000
app.get('/',(req,res)=>
{
    res.end('hello')
})
app.use(express.json())
let data=[]
let newid=1
app.post('/add',(req,res)=>
{
   const  {name,price}=req.body
   let newdata={id:newid++,name,price}
   data.push(newdata)
   res.status(201).send(`${newdata} added successfully`)

})
app.get('/add/:id',(req,res)=>{
    const d=data.find(t=>t.id===parseInt(req.params.id))
    
        if(!d)
        {
            return res.send("404 error not found")
        }
    res.send(d)
})

app.get('/add',(req,res)=>
{
    res.send(data)
})
app.listen(port,()=>console.log(`server is running on ${port}`))