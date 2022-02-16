const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Cineplex extends Model {
    static associate(db) {
      // Khai báo các mối quan hệ
      this.hasMany(db.Cinema, {
        as: "cinemas",
        foreignKey: "cineplexId",
      });
    }
  }

  Cineplex.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "name",
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "logo",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: Sequelize.fn("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "Cineplex",
      tableName: "cineplexes",
      timestamps: true,
    }
  );

  return Cineplex;
};
