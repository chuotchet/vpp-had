var models = require("./models");


var data = {
  link: 'dfd.html',
  name: 'dd'
}
models.sequelize.sync();
models.Cat.create(data);
models.Cat.findAll().then(cat => {
  console.log(cat);
});
