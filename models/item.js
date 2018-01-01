"use strict";

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subCatId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    classMethods: {
      getItemBy: function(MAC, callback){
        var query = {
          where: {
            N_MAC: MAC
          }
        };
        Item.findOne(query).then(callback);
      },
      associate: function(models){
        Item.belongsToMany(models.Device, {through: 'ItemDevices'});
      }
    },
    tableName: 'Item'
  });
  Item.createData = function(item){
    var url = changeAlias(item.name) + ' ' + Math.round(Math.random()*10000);
    item.link = item.split(' ').join('-');
    SubCat.create(item);
  }
  return Item;
};
