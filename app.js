const express = require('express');
const Config = require('./config');
var logging = require('./log/logging');

const app = express();

// listen for requests Router Configuration
require('./routes/routes.js')(app);

//Middleware 
app.use(function(req, res, next){
    logging.info("Request received");
    next();
});

// Application Starting 
app.listen(Config.PORT, () => {
    logging.info('Example app listening on port ' + Config.PORT);
}).on('error',(err)=>{
    logging.error("Error at starting"+err.message);
});

