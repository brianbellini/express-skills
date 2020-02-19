var express = require('express');
var router = express.Router();
var Skill_M = require('../models/skill_M');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res) { // Catch home request
  res.render('skills_V/index', {
    skills: Skill_M.getAll()
  });
});

module.exports = router;
