const express =require('express');
const app = express();
require('dotenv').config();



if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}








let port = process.env.port || 5000;
app.listen(port,()=>{
    console.log('port is running ${port}')
});