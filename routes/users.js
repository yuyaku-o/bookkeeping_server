var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //引入对象
var TodoModel = mongoose.model('user');//引入模型

var request = require('../libs/request')()

// 获取code
router.post('/code', function (req, res, next) {
  (async function () {
    let _res = await request.get('https://api.weixin.qq.com/sns/jscode2session?appid=' + req.body.appid + '&secret=' + req.body.secret + '&js_code=' + req.body.code + '&grant_type=authorization_code');
    if (!_res.openid || !_res.session_key || _res.errcode) {
      return {
        result: -2,
        errmsg: data.errmsg || '返回数据字段不完整'
      }
    } else {
      return _res
    }
  })();
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
