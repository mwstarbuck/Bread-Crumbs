'use strict';
module.exports = (sequelize, DataTypes) => {
  const HikeRecord = sequelize.define('HikeRecord', {
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {});
  HikeRecord.associate = function(models) {
    // associations can be defined here
  };
  return HikeRecord;
};