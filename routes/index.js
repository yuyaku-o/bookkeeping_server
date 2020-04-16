var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //引入对象
var TodoModel = mongoose.model('user');//引入模型

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login', function (req, res, next) {
  console.log(req.body)
  // TodoModel.find(req.body, function (err, aa, count) {
  //   if (err) {
  //     res.send(err.message)
  //   }
  //   res.send(aa)
  // })
  TodoModel.create(
    req.body)
});
module.exports = router;
