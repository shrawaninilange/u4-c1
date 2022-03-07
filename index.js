 const express =require("express")


 const app = express()
// console.log(express)


app.use(Logger)
app.use(Logger2)

app.get( "/books" ,(req ,res)=>{
    console.log("book")
    return res.send({ route: "/books"})
    if(res == true){
        console.log("dsvd")
    }
})

app.get( "/authors" ,(req ,res)=>{
    return res.send({ route: "/authors", permission: true})
    
})

app.get( "/libraries",(req ,res)=>{
    return res.send( { route: "/libraries", permission: true})
    
})


function Logger(req,res,next){
    console.log("book")
    next()
}
 
function Logger2(req,res,next){
    console.log("book")
    next()

    if(res == true){
        console.log("dsvd")
    }
}
app.listen(5000 ,()=> {
    console.log("book")
})

app.listen(2000 ,()=> {
    console.log("librarian")
    
})
app.listen(3000 ,()=> {
    console.log("author")
    
})






// http://localhost:5000/books