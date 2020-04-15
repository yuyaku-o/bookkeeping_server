var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //引入对象
var TodoModel = mongoose.model('user');//引入模型
var URL = require('url'); //引入URL中间件，获取req中的参数需要

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function (req, res, next) {
  TodoModel.find({ 'userid': 1 }, function (err, aa, count) {
    if (err) {
      res.send(err.message)
    }
    res.send(aa)
  })
});
module.exports = router;
