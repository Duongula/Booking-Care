'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.User, { foreignKey: 'doctorId', targetKey: 'id', as: 'doctorIdHistory' })
      History.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderDataHistory' })
    }
  };
  History.init({
    patientId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    date: DataTypes.STRING,
    files: DataTypes.TEXT,
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};