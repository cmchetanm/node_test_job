const User = require('../models').User;
const jwt = require('jsonwebtoken');
const jwtBlacklist = require('jwt-blacklist')(jwt);
const bcrypt = require('bcryptjs');

module.exports = {
  create,
  encryptUserPassword,
  updateUser,
  getUser,
  deleteUser
};

function create(req,res){
  var result = findUser(req.body.username);
  result.then(rs=>{
    User.create({
      name:req.body.name,
      username:req.body.username,
      password:req.body.password,
      birthdate:req.body.birthdate
    })
    .then(user =>res.status(200).send('Registered successfully!'))
    .catch(error => res.status(400).send(error));
  }).catch(err=>{
    res.status(500).send({error:err});
  })
  }

function findUser(username){
  return new Promise(function(resolve,reject){
    User.find({where:{username: username}}).then(function(u){
      console.log("xxxxxxxxx"+u);
      if(u == null){
        resolve("username does not exist");
      }else{
        reject("username already exist");
      }
    })

    })
}

function getUser(req,res){
  let userId = req.params.id;
  if(userId){
    User.find({where:{id: userId}}).then(function(user){
    //  console.log(user);
      if(user == null){
        res.status(200).send({sucess:true,msg:'No data found'});
      }else{
        delete user.dataValues.password;
        res.status(200).send({sucess:true,user:user.dataValues});
      }
    })
  }else{
    User.findAll({attributes: ['id', 'username','name','birthdate']}).then(function(user){
    //  console.log(user);
      if(user.length == 0){
        res.status(200).send({sucess:true,msg:'No data found'});
      }else{
        res.status(200).send({sucess:true,user:user});
      }
    })
  }

}

function encryptUserPassword(req,res,next){
  if (req.body && 'password' in req.body && req.body.password != '') {
       bcrypt.genSalt(10,function(errr,salt){
         bcrypt.hash(req.body.password,salt,function(err,hash){
           if(err) return next('Password hashing failure');
           req.body.password = hash;
           next();
         });
      });
    }else {
      res.status(402).send({failed:'password field is required'});
    }
  }

function updateUser(req,res){
    User.update({name:req.body.name,birthdate:req.body.birthdate},{where:{id:req.loggedInUserId}}).then(user=>{
      res.status(200).send({sucess:true,msg:'user data has been updated'});
    }).catch(err=>{
      res.status(500).send({fail:'user is not updated'});
    })
}

function deleteUser(req,res){
  //let userId = req.params.id;
  //console.log(req.query.id);
  User.destroy({where:{id: req.loggedInUserId}}).then(function(user){
  //  console.log(user);
    if(user == null){
      res.status(200).send({sucess:true,msg:'No data found'});
    }else{
      res.status(200).send({sucess:true,msg:'User has been deleted successfully!'});
    }
  })

}
