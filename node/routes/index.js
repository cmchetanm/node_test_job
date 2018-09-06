const userController = require('../controllers').user;
const authController = require('../controllers').auth;
const verifyToken = require('../middleware/verifyToken');
const lockController = require('../controllers').lock;

module.exports = (app)=>{
  app.get('/api',(req,res)=>res.status(200).send({
    message:'Welcome to the Todos API!'
  }));

  //auth routes
  app.post('/api/login',authController.login);

  // user routes
  app.post('/api/user',userController.encryptUserPassword, userController.create);
  app.get('/api/user/:id?', verifyToken, userController.getUser);
  app.put('/api/user',verifyToken, userController.updateUser);
  app.delete('/api/user/:id?',verifyToken, userController.deleteUser);

  // locks routes
  app.post('/api/lock',verifyToken,lockController.create);
  app.get('/api/lock/:id?', verifyToken, lockController.getLock);
  app.put('/api/lock/:id?',verifyToken, lockController.updateLock);
  app.delete('/api/lock/:id?',verifyToken, lockController.deleteLock);

}
