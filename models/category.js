"use strict";

module.exports = function(sequelize, DataTypes) {
  var Cat = sequelize.define('Cat', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      getCatBy: function(MAC, callback){
        var query = {
          where: {
            N_MAC: MAC
          }
        };
        Cat.findOne(query).then(callback);
      },
      associate: function(models){
        Cat.belongsToMany(models.Device, {through: 'CatDevices'});
      }
    },
    tableName: 'Cat'
  });
  return Cat;
};
