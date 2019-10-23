const express = require('express');
//const mongoose = require('mongodb').MongoClient;
//const countries = require('./src/infrastructure/countries');
//const router = require('./routes');
const app=express();
//const countr = countries;
//imports routes

const route= require('./src/routes/countriesRoute')
//middleware
//app.use(router);
app.use(express.json());

//routes
app.get(route);
//app.use('./',require('./src/routes/index'));

app.use('/',require('./src/routes/countriesRoute'))
//server listens
//app.listen(3000);
app.listen(3000, () => {
  console.log(`App on port 3000`);    
});

