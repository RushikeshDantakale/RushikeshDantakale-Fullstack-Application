const mongoose = require('mongoose');

mongoose.set("strictQuery", false);





mongoose.connect(process.env.URL,{
    useNewUrlParser:true,
    
    useUnifiedTopology: true,
    
    }).then(()=>{
        console.log('connection successful')
    }).catch((err)=>{
        console.log(err);
    });