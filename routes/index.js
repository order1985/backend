var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
  if(req.cookies.authorized) {
       res.render('admin/home', {title: '首页', content: '带cookie登陆成功！'});
   } else {
       res.redirect('/login');
   }
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录', flag: 0 });
});

router.post('/login', function(req, res) {
  if (req.body.username == 'hello' && req.body.password == 'world') {
    res.cookie('authorized', req.body.username);
    res.redirect('/admin');
  } else{
        res.render('login', {title: '登录', flag: 1});
  }
});

module.exports = router;
