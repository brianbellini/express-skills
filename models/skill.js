module.exports = {
  getAll,
  getOne,
  deleteOne,
  create
};

const skills = [
    {skill: 'HTML'},
    {skill: 'JavaScript'},
    {skill: 'CSS'}
  ];
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
      return skills[id];
  }
  

function deleteOne(id) {
  console.log(id)
  console.log('Should delete: ' + skills[id]);
  skills.splice(id, 1);
}

function create(skill) {
  skills.push(skill);
}