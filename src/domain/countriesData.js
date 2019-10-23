let serviceCountries = require('../infrastructure/countries');

const getCountries = async ()=>{
    let data = await serviceCountries();
    let countriesData = [];
        try{           
            countriesData = data.map((elem,index)=> {
                return{
                 id:index,
                 lat:elem.latlng[0],
                 long:elem.latlng[1],
                 name:elem.name
                }             
              });          
        }
        catch(err){
            console.log('ERR: '+err);
        };
        return countriesData;   
}

module.exports = getCountries; 