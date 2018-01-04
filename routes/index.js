var express = require('express');
var models = require('../models');
var router = express.Router();
var Sequelize = models.sequelize;
const Op = Sequelize.Op;

var getCatnSub = function(){
  var data = [];
  return new Promise(function(resolve, reject){
    models.Cat.findAll().then(cats => {
      for (i = 0;i<cats.length;i++) {
        (function(i) {
          var subData = [];
          models.SubCat.findAll({where : {catId: cats[i].id}}).then(subCats => {
            for (j = 0; j<subCats.length; j++){
              subData.push({name: subCats[j].name, link: subCats[j].link});
              if (j === subCats.length-1) data.push({name: cats[i].name, link: cats[i].link, sub: subData});
              // console.log(data);
            }
            if (i===cats.length-1) resolve(data);
          });
        })(i);
      }
    });
  });
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/items', function(req, res, next) {
  res.render('items');
});

//return list of cat and sub cat
router.get('/catnsub', function(req, res){
  getCatnSub().then(function(data){
    console.log(data);
    res.json({catnsub: data});
  });
});

router.get('/homitem', function(req, res){
  console.log('aaaaaaa');
  models.Item.findAll({
    limit:20,
    order:[Sequelize.fn( 'RANDOM' )],
    where: {
      [Op.or]: [{subCatId: 1}, {subCatId: 2}, {subCatId: 3},{subCatId: 4}]
    }
  }).then(items => {
    res.json({homitem: items})
  });
});

module.exports = router;
