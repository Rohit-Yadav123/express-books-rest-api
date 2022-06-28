const express= require('express');
const mongoose=require('mongoose');
const bookRoutes=require('./Routes/bookRoutes');
const bodyParser = require('body-parser');
const app= express();

app.use(bodyParser.json());
app.use('/', bookRoutes);


mongoose.connect('mongodb+srv://Rohit-Kumar123:Bx30p1IqbOPBFC8f@rohitcluster.6c3odpo.mongodb.net/BookDB?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log("Connected to MongoDB database");
}).on('error',(err)=>{
    console.log(err);
})

let port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})