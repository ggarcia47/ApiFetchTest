const express = require ("express");
const router = express.Router(); 
const countryService=require('../controller/countryController');


//routes
//router.post('/',dogService.saveDog);
router.get('/countries',countryService.getCountries);
//router.get('/pepe',countryService.countriesService11);


module.exports= router;