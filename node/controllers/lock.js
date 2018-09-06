const Lock = require('../models').Lock;
const jwt = require('jsonwebtoken');
const jwtBlacklist = require('jwt-blacklist')(jwt);
const bcrypt = require('bcryptjs');
const uuidv1 = require('uuid/v1');

module.exports = {
  create,
  updateLock,
  getLock,
  deleteLock
};

function create(req,res){
  var result = findLock(req.body.name);
  result.then(rs=>{
    Lock.create({
      name:req.body.name,
      userId:req.loggedInUserId,
      macId:uuidv1()
    })
    .then(user =>res.status(200).send('Lock added successfully!'))
    .catch(error => res.status(400).send(error));
  }).catch(err=>{
    res.status(500).send({error:err});
  })
  }

function findLock(name){
  return new Promise(function(resolve,reject){
    Lock.find({where:{name: name}}).then(function(u){
      console.log("xxxxxxxxx"+u);
      if(u == null){
        resolve("name does not exist");
      }else{
        reject("name already exist");
      }
    })

    })
}

function getLock(req,res){
  let lockId = req.params.id;
  if(lockId){
    Lock.find({where:{id:lockId,userId: req.loggedInUserId}}).then(function(lock){
    //  console.log(user);
      if(lock == null){
        res.status(200).send({sucess:true,msg:'No data found'});
      }else{
        res.status(200).send({sucess:true,lock:lock.dataValues});
      }
    })
  }else{
    Lock.findAll({where:{userId: req.loggedInUserId}}).then(function(lock){
      console.log(lock);
      if(lock.length == null){
        res.status(200).send({sucess:true,msg:'No data found'});
      }else{
        res.status(200).send({sucess:true,lock:lock});
      }
    })
  }
}

function updateLock(req,res){
  let lockId = req.params.id;
  if(lockId){
    Lock.update({name:req.body.name},{where:{id:lockId,userId:req.loggedInUserId}}).then(lock=>{
      res.status(200).send({sucess:true,msg:'Lock updated successfully!'});
    }).catch(err=>{
      res.status(500).send({fail:'Lock is not updated'});
    })
  }else{
    res.status(402).send({failed:'lockId is required'});
  }
}

function deleteLock(req,res){
  let lockId = req.params.id;
  //console.log(req.query.id);
  if(lockId){
  Lock.destroy({where:{id:lockId,userId: req.loggedInUserId}}).then(function(lock){
  //  console.log(user);
    if(lock == null){
      res.status(200).send({sucess:true,msg:'No data found'});
    }else{
      res.status(200).send({sucess:true,msg:'Lock deleted successfully!'});
    }
  })
}else{
  res.status(402).send({fail:'lockId is required'});
}

}
