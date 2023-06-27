const express= require("express")
const Routes= require("./routes")
const morgan = require('morgan');
const app = express();

app.name = 'API';
app.use(morgan('dev'));

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
  
//importacion de las rutas
 app.use(Routes);
module.exports = app;