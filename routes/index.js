var express = require('express');
var models = require('../models');
var router = express.Router();

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
  // var data = [];
  // models.Cat.findAll().then(cats => {
  //   cats.forEach(cat => {
  //     var subData = [];
  //     models.SubCat.findAll({where : {catId: cat.id}}).then(subCats => {
  //       subCats.forEach(subCat => {
  //         subData.push({name: subCat.name, link: subCat.link});
  //         // console.log(subData);
  //       });
  //     });
  //     data.push({name: cat.name, link: cat.link, sub: subData});
  //     console.log(data);
  //   });
  // });
  // console.log(data);
  // res.json({catnsub: data});
  getCatnSub().then(function(data){
    console.log(data);
    res.json({catnsub: data});
  });
});

module.exports = router;
