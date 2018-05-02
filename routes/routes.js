module.exports =(app) =>{
    const controller=require("../controllers/controller.js");
    //Used to redirect to the index page 
    app.get('/', controller.index );
    //Used to redirect to the index page 
    app.get('/add', controller.add );
    // Insert the New User
    app.get('/user', controller.insert);
    //Get the all users data
    app.get('/retrive', controller.getData);
    //To Login 
    app.get('/login', controller.login );
       //To Delete 
    app.get('/delete', controller.delete );
    //Redirect to delete page
    app.get('/deleteIndex', controller.deleteIndex );
      //To Update the existing data
    app.get('/update', controller.update );
    //Redirect to Update Page
    app.get('/updateIndex', controller.updateIndex );
}