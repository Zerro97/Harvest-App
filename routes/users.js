/**
 * JWT Web Token Explanation
 * token = jwt.sign(payload, privateKey, signOptions)
 * 
 * payload: data that is encrypted
 * privateKey: used in RSA encryption
 * signOptions: specify configuration such as expire time, issuer of token etc..
 */

const router = require('express').Router();
let User = require('../models/user.model');
var jwt = require('jsonwebtoken');
var config = require('../config');

/**
 * GET
 * This is only used for testing. Users shouldn't have access (make GET request) to other users information
 * 
 * Req: Nothing (Doesn't require token)
 * Res: Array of users
 */
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * POST
 * Create a new user. Passes username and password. 
 * Hash the password immediately and store it in database. 
 * Create token using the user id
 * Return token
 * 
 * Req: Username & password
 * Res: Return token
 */
router.route('/').post((req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  const username = req.body.username;

  const newUser = new User({username, hashedPassword});
  console.log(newUser);

  newUser.save()
    .then(function(){
      var token = jwt.sign({ id: newUser._id }, config.private_key, {
        expiresIn: 86400 // expires in 24 hours
      });

      res.status(200).send({ auth: true, token: token });
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;