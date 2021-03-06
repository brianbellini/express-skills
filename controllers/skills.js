module.exports = {
    index,
    show,
    delete: deleteSkill,
    new: newSkill,
    create,
};

var Skill = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  };

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', {
    skills: Skill.getAll()
  });
}

function create(req, res) {
  console.log(req.body);
  req.body.done = false;
  Skill.create(req.body);
  res.redirect('/skills');
}