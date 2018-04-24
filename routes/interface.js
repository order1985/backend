var express = require('express');
var userModel = require('../models/user');

var router = express.Router();


/* GET users listing. */
router.get('/getUsers.html', function(req, res, next) {
  // res.send('respond with a resource');
  userModel.getUsers().then(function (result) {
    res.status(200).json(JSON.stringify(result));
  }).catch(function(e) {
    res.status(200).json({error: 'error occured!'})
  });
});

//http://expressjs.com/zh-cn/4x/api.html
router.get('/getUser.html', function(req, res, next) {
  let query = req.query;
  let userName = query.userName;
  
  userModel.findByName(userName).then(function(result) {
    // res.status(200).json(result);
    res.status(200).json(result);
  }).catch(function() {
    res.status(200).json({error: 'error occured!'})
  })
  // userModel.getUsers().then(function (result) {
  //   res.status(200).json(JSON.stringify(result));
  // }).catch(function(e) {
  //   res.status(200).json({error: 'error occured!'})
  // });
});

module.exports = router;
