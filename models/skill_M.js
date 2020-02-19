module.exports = {
  getAll,
  getOne
};

const skills = [
    {skill: 'HTML', known: true},
    {skill: 'JavaScript', known: true},
    {skill: 'CSS', known: false}
  ];
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
      return skills[id];
  }