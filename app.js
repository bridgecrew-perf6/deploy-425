const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.send('hello word');
    res.end();
});

const port=process.env.PORT || 5000;
app.listen(port,function(){
    console.log('server 5000');
});
