const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.port || 5000;

const pagesRoutes = require('./routes/pages');
app.use('/', pagesRoutes);


app.listen(PORT, ()=>{
    console.log("server listening on port: "+PORT);

});


