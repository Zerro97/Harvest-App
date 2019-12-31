const router = require('express').Router();
let User = require('../models/user.model');

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
 * Create a new user. Doesn't require token as anyone should be able to make account
 * 
 * Req: Username & password
 * Res: Message indicating if it succeeded or not
 */
router.route('/').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username});
  

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;