import { Model, DataTypes } from 'sequelize';

export default class ProductUser extends Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.product = this.belongsTo(models.Product);
  }
}
