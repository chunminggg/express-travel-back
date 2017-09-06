var express = require('express');
var bodyParser = require('body-parser')
var validator = require('validator')
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', (req, res, next) => {
  let obj = req.body
  let isPhone = validator.isMobilePhone(obj.phoneNumber,'zh-CN')
  console.log(obj.phoneNumber,isPhone)  
  if (!isPhone)
    res.send('请输入正确手机号码')
})
module.exports = router;