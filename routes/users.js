var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //引入对象
var TodoModel = mongoose.model('user');//引入模型

// 获取code
router.post('/code', function (req, res, next) {
    console.log(req.body)
});

// 获取token
router.post('/token', function (req, res, next) {
  TodoModel.findOne(req.body, function (err, aa, count) {
    if (err) {
      res.send(err.message)
    }
    console.log(aa)
  })
});

// 使用token登录
router.post('/login', function (req, res, next) {
  TodoModel.findOne(req.body, function (err, aa, count) {
    if (err) {
      res.send(err.message)
    }
    console.log(aa)
  })
});

module.exports = router;
