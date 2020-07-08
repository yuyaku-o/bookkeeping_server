var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //引入对象
var TodoModel = mongoose.model('user');//引入模型

// 加密
const crypto = require('crypto')

var request = require('../libs/request')()

// 获取code
router.post('/code', function (req, res, next) {
  (async function () {
    let _res = ''
    console.log(req.body)
    _res = await request.get('https://api.weixin.qq.com/sns/jscode2session?appid=' + req.body.appid + '&secret=' + req.body.secret + '&js_code=' + req.body.code + '&grant_type=' + req.body.grant_type)
    console.log(_res)
    if (_res.errcode) {
      return {
        result: -2,
        errmsg: _res.errmsg || '返回数据字段不完整'
      }
    } else if (_res == null) {
      res.send('获取openid失败' || {})
    } else {
      res.send(crypto.createHash('sha1').update(_res, 'utf8').digest('hex') || {});
    }
  })();
});

// 获取token并返回给前端
router.post('/token', function (req, res, next) {
  TodoModel.findOne(req.body, function (err, aa, count) {
    if (err) {
      res.send(err.message)
    }
    console.log(aa)
  })
});

// 使用token登录
// router.post('/login', function (req, res, next) {
//   TodoModel.findOne(req.body, function (err, aa, count) {
//     if (err) {
//       res.send(err.message)
//     }
//     res.send(aa)
//   })
// });

module.exports = router;
