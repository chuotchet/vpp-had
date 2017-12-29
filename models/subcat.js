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
      type: DataTypes.STRING,
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
  return SubCat;
};
