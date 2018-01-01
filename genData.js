var models = require("./models");


var catData = {
  name: 'Văn Phòng Phẩm'
}
models.sequelize.sync();
models.Cat.createData(data);
models.Cat.findAll().then(cat => {
  console.log(cat);
});
