var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //引入对象
var TodoModel = mongoose.model('user');//引入模型

/* GET home page. */
router.post('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
