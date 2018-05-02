
var MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config.js');
var logging = require(dbConfig.PATH+'/log/logging');

exports.insert = (req, res) => {
    logging.info('Inside Insert Function');
    var userobj= {
        userid:req.query.userid,
        firstname:req.query.firstname,
        lastname:req.query.lastname,
        password:req.query.password,
        age:req.query.age
    }
    MongoClient.connect(dbConfig.url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("User");
      dbo.collection("UserData").insertOne(userobj, function(err, response) {
        if (err) {
            logging.error('Failed to Insert'+JSON.stringify(userobj));
            throw err};
        res.json({"message": "Inserted Successfully ."});
        db.close();
      });
    }); 
    logging.info('Inside Insert Function'+JSON.stringify(userobj));
};

exports.index = (req, res) => {
    const path=dbConfig.PATH+ "/view/head.html"
    logging.info(`Inside Index Function Redirect to${path}`);
    res.sendFile(path);
};

exports.add = (req, res) => {
    const path=dbConfig.PATH+ "/view/index.html";
    logging.info(`Inside Index Function Redirect to${path}`);
    res.sendFile(path);
};

exports.getData = (req, res) => {
    logging.info('Inside getData Function');
    MongoClient.connect(dbConfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("User");
        dbo.collection("UserData").find({}).toArray(function(err, result) {
            if (err) throw err;
            logging.info('User Detail Retrived successfully');
            res.json(result);
            db.close();
          });
      }); 
};
exports.login = (req, res) => {
    
    res.sendFile(path);
};
exports.updateIndex = (req, res) => {
    const path=dbConfig.PATH+ "/view/update.html";
    logging.info(`Inside updateIndex Function Redirect to${path}`);
    res.sendFile(path);
};
exports.deleteIndex = (req, res) => {
    const path=dbConfig.PATH+ "/view/delete.html";
    logging.info(`Inside deleteIndex Function Redirect to${path}`);
    res.sendFile(path);
};

exports.delete = (req, res) => {
    MongoClient.connect(dbConfig.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("User");
        var myquery = { userid: req.query.userid};
        dbo.collection("UserData").deleteOne(myquery, function(err, obj) {
          if (err) throw err;
          logging.info('User Detail Deleted successfully');
          res.json({"message": "Deleted Successfully ."});
          db.close();
        });
      }); 

};
exports.update = (req, res) => {
MongoClient.connect(dbConfig.url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("User");
    var myquery = { userid: req.query.userid};
    var newvalues = {
        firstname:req.query.firstname,
        lastname:req.query.lastname,
        password:req.query.password,
        age:req.query.age
    }
    dbo.collection("UserData").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  }); 
}