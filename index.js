const express = require ('express');
const app = express();

app.get('/',(req,res)=>{res.send ("ez game haha get hacked");});
app.get('/profile',(req,res)=>{res.send ("game aha get hacked");});
app.get ("/google", (req,res)=>{res.sendfile(__dirname+"/index.html");});
app.listen(3000, ()=> { console.log('server is running at port 3000');});