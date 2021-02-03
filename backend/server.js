
let express = require('express');
let app = express();
let configure = require('./server/configure');
let mongoose = require('mongoose');
const path = require('path')



// checks to see if there is any port env
 app.set('port' , process.env.PORT || 8045);

// app.get('/', function(req, res){
//     res.send('Welcome to imagery');
// })



 configure(app)



// 
// mongodb://localhost:27017/tasks

// var  MONGODB_URI = "mongodb+srv://uchechidi:Easytech@cluster0shoppingcart-kcinc.mongodb.net/cluster0shoppingcart?retryWrites=true&w=majority";
var MONGODB_URI = "mongodb://uchechidi:Easytech@cluster0shoppingcart-shard-00-00-kcinc.mongodb.net:27017,cluster0shoppingcart-shard-00-01-kcinc.mongodb.net:27017,cluster0shoppingcart-shard-00-02-kcinc.mongodb.net:27017/shopping?ssl=true&replicaSet=Cluster0shoppingcart-shard-0&authSource=admin&retryWrites=true&w=majority"
// const DB = process.env.MONGODB_URI1
mongoose.connect(MONGODB_URI ,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('error', console.error.bind(console, 'Database connection Error')); /// handling the error
mongoose.connection.once('open', function(){
    console.log('connected to Database');
})






 
    const appPath = path.join(__dirname, '..', 'dist');
    app.use(express.static(appPath));
  
    app.get('*', function(req, res) {
      res.sendFile(path.resolve(appPath, 'index.html'));
    });



 let server = app.listen(app.get('port') , function(){
     console.log('server listening at Localhost:' + app.get('port'));
      
 });

