const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/say',(req,res)=>{
    const url = 'https://59f8sxfkaf.execute-api.us-east-1.amazonaws.com/say'+'?keyword='+req.query.keyword;
      axios.get(url)
        .then((response) => {
            res.send(response.data);
            console.log(response.data);
        }).catch(function(error){
            console.log("error");
        })
});
app.listen(port, () => {
    console.log('API served at http://localhost:'+port);
});

