const fetch =require('node-fetch');

const url = "https://restcountries.eu/rest/v2/all";
const method ={method: 'get'};

async function serviceCountriesAsync(name) 
{   
    try {
        let response = await fetch(url,method);
  let data = await response.json()
  return data;
    } catch (error) {
        console.log(error);
    }
  
}
const serviceCountries =async ()=>{
    return await fetch(url,method)
    .then(response =>response.json())
    .catch((err) =>{
        console.log('Error:' ,err);

    })
}



module.exports = serviceCountriesAsync;