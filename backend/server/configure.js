   
let router = require('./route')

let path = require('path')




let bodyParser = require('body-parser');
let ExpressValidator= require('express-validator');





module.exports = function(app){
  
    // app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use(ExpressValidator({
        customValidators: {
            isImage:function(value, filename) {
        
                var extension = (path.extname(filename)).toLowerCase();
                switch (extension) {
                    case '.jpg':
                        return '.jpg';
                    case '.jpeg':
                        return '.jpeg';
                    case  '.png':
                        return '.png';
                    default:
                        return false;
                }
            }
        }
    }))

    app.use(bodyParser.json());
   app.use('/api/v1', router)
   
   
   
    

  
    // route(app)
    
    
   
     
    return app; 
}