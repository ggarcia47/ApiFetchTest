const DataCountries= require('../domain/countriesData');
let countriesService={
    
        getCountries: async (req, res)=> {
          try {
              if(await DataCountries===undefined){
                res.status(404).json({           
                  "success": false,
                  "msg": "countries not found"
              })
            }else{
              res.status(200).json({           
                "success": true,
                "msg": "country found!",
                "country":  await DataCountries()
              })      
              }
            
          } catch (error) {
            res.status(500).json({           
            "success": false,
            "msg": "error when trying to search for countries"
          })           
          }             
        }, 
        
};

module.exports= countriesService;