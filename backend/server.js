const express = require('express');
const app = express();
const cors = require('cors')
  
app.use(cors({
    origin: '*'
}))
  
app.get('/' , (req , res)=>{
    res.send("GeeksforGeeks");
})
  
app.listen(3000 , ()=>{
    console.log("server is running on port 3000");
})