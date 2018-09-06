const User = require('../models').User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtBlacklist = require('jwt-blacklist')(jwt);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

module.exports = {
  login,
  logout
};

function login(req,res,next){
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  User.find({where:{username: username}}).then(function(user){
    if(!user) return res.status(401).send({ error: 'Username OR Password not matched',status_code:401 });
    //var hashPassword = user.password;
    // if(user.email_verified == false){
    //   return res.status(401).send({ error: 'Email is not verified yet',status_code:401 });
    // }
    bcrypt.compare(password,user.dataValues.password,function(err,isMatched){
      if(err) return res.status(401).send({error:'Unauthorized user',status_code:401});
      if(isMatched){
        //suser = user.toObject();
        delete user.dataValues.password;
        var token = jwt.sign({user: user.dataValues}, config.secret, {
          expiresIn: '60m',
          algorithm: 'HS256'
        });
          //  res.data = [{sucess:true,user:user.dataValues,token:'Bearer '+token}];
          res.status(200).send({sucess:true,user:user.dataValues,token:'Bearer '+token});
      }else {
        res.status(401).send({error:'Password not matched',status_code:401});
      }
    });
  }).catch(err=>{
    res.status(500).send(err);
  });
}

function logout(req,res,next){
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    //console.log(bearerToken);
     var refreshed = jwtBlacklist.blacklist(bearerToken);
    //  console.log(refreshed);
    jwt.verify(bearerToken, config.secret, function(err, decoded) {
            if (err) { //failed verification.
              res.data = 'user logout successfully';
              next();
              return;
              // console.log(err);
              //  return res.json({"error": err});
            }
            res.data = "something went wrong,user is not logged out.";
            next();

        });
    }else {
      res.data = "token is not present";
       next();
    }
}
