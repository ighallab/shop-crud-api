const express = require('express');// load express application server module 
const httpLogging = require('morgan');//load http rq,rs logger module

const port = process.env.PORT || 3000;//get the port from the local machine environment variable or set to default(3000)

const app = express();// define,initialize express module 

app.use(express.json());//for parsing body req to json  //middle ware 
app.use(express.urlencoded({
    extended:true
})) // for encoding the  req params to be unified and extended it 

app.use(httpLogging('tiny'));//use http logger middilewar 


//redirect any route that goes to root
app.get('/',(req,res)=>{
    
    res.status(403).send("<h1>Forbidden Access ....</h1>")
});


app.listen(port,()=>{
    //log a message when the application server starting
    console.log(`Server is up  on http://localhost:${port}`);
});