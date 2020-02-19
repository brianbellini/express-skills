module.exports = {
    index,
    show,
};

var Skill_M = require('../models/skill_M');

function index(req, res) {
    res.render('skills_V/index', {
      skills: Skill_M.getAll()
    });
  };

function show(req, res) {
    res.render('skills_V/show', {
        skill: Skill_M.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}
