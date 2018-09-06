var jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

module.exports = function(req,res,next) {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    console.log(bearerToken)
    // verifies secret and checks exp
        jwt.verify(bearerToken, config.secret, function(err, decoded) {
            if (err) { //failed verification.
              return res.status(401).send({
                  "error": "Invalid token"
              });
            }
            req.loggedInUserId = decoded.user.id;
            req.token = bearerToken;
            next(); //no error, proceed
        });
  }else {
    return res.status(401).send({
        "error": "token is not present"
    });
   }
}
