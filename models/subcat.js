"use strict";

module.exports = function(sequelize, DataTypes) {
  var SubCat = sequelize.define('SubCat', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    catId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      getSubCatBy: function(MAC, callback){
        var query = {
          where: {
            N_MAC: MAC
          }
        };
        SubCat.findOne(query).then(callback);
      },
      associate: function(models){
        SubCat.belongsToMany(models.Device, {through: 'SubCatDevices'});
      }
    },
    tableName: 'SubCat'
  });
  SubCat.createData = function(cat, cb){
    var url = changeAlias(cat.name) + ' ' + Math.round(Math.random()*10000);
    cat.link = url.split(' ').join('-').replace(/,/g,'');
    SubCat.create(cat).then(function(){cb()});
  }

  // SubCat.associate: function(models){
  //   SubCat.hasMany(models.Item, {through: 'SubCatDevices'});
  // }
  return SubCat;
};

function changeAlias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim();
    return str;
}
