const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path:"./.env"});
app.use(cors());
app.use(express.json());
require('./DB/conn.js');
app.use(require('./router/auth'));



app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})